"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const categoryRoutes_1 = __importDefault(require("./routes/categoryRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const cors_1 = __importDefault(require("cors")); // CORS (Cross-Origin Resource Sharing) middleware
const multer_1 = __importDefault(require("multer"));
const body_parser_1 = __importDefault(require("body-parser"));
// Load environment variables from a .env file into process.env
dotenv_1.default.config();
const upload = (0, multer_1.default)();
const app = (0, express_1.default)();
// Set the maximum request body size (useful for uploads)
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
// Define the port the server will run on
const port = process.env.PORT || 3000;
// Serve static files from the 'uploads' directory
app.use('/uploads', express_1.default.static('uploads'));
// Middleware to parse JSON requests into JS objects
app.use(express_1.default.json());
// Enable CORS for all routes
app.use((0, cors_1.default)());
// Asynchronous function to connect to MongoDB
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log('DB Connected'); // Log success
        }
        catch (err) {
            console.error('DB Connection Error:', err); // Log errors
        }
    });
}
// Connect to the database
connectDB();
// Define API routes
app.use('/api/categories', categoryRoutes_1.default);
app.use('/api/products', productRoutes_1.default);
// Start the server on the defined port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`); // Log the URL where the server is running
});
