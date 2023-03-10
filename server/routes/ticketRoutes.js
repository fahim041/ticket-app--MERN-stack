const router = require("express").Router();
const {
  createTicket,
  getTickets,
  getTicket,
  updateTicket,
  deleteTicket,
} = require("../controllers/ticketController");
const { auth } = require("../middleware/authMiddleware");
const noteRouter = require("./noteRoutes");

router.use("/:id/notes", noteRouter);

router.get("/", auth, getTickets);
router.post("/", auth, createTicket);
router.get("/:id", auth, getTicket);
router.patch("/:id", auth, updateTicket);
router.delete("/:id", auth, deleteTicket);

module.exports = router;
