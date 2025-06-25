import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { Book } from "./models/Book.js"; // Adjust the path as necessary
import { Review } from "./models/Review.js"; // Adjust the path as necessary
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const MONGO_URI = process.env.URI;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

mongoose
  .connect(MONGO_URI, clientOptions)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.post("/books", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/books/:id", async (req, res) => {
  // Get a single book by ID and populate reviews
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/books/:id/reviews", async (req, res) => {
  try {
    const reviews = await Review.find({ book: req.params.id }).sort({
      createdAt: -1,
    }); // Sort by newest first

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/reviews", async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email: email });
    if (foundUser) {
      res.status(400).send({
        message: "user already exists ",
      });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    const isValidEmail = (email) => emailRegex.test(email);
    const isValidPassword = (password) => password.length > 6;

    if (!isValidEmail(email)) {
      return res.status(400).send({
        message: "email format invalid",
      });
    }

    if (!isValidPassword(password)) {
      return res.status(400).send({
        message: "password must be atleast 6 characters long",
      });
    }
    const newUser = await User.create(req.body);

    res.status(200).send({ message: "user created ", status: "Success" });
  } catch (error) {
    res
      .status(400)
      .send({ message: "internal server error ", status: "failure" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const Userfound = await User.findOne({ email: email });

    if (!Userfound) {
      res.status(401).send({ message: "user credentials invalud" });
    }
    const comparedPassword = await bcrypt.compare(password, Userfound.password);

    if (!comparedPassword) {
      res.status(401).send({ message: "user credentials invalud" });
    }

    const token = jwt.sign({ email: Userfound.email }, JWT_SECRET, {
      expiresIn: "3h",
    });

    console.log("token", token);
    res.status(200).json({
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send({ message: "internal server error" });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
