import BasketIteam from "../models/basketModel.js";

const getBasket = async (req, res) => {
    try {
        const products = await BasketIteam.find();
        res.json(products);
    } catch (error) {
        console.log('xeta');
    }
};

const postBasket = async (req, res) => {
    try {
        const newProducts = { ...req.body, quantity: 1 }; // Yeni məhsul əlavə ediləndə default olaraq 1
        await BasketIteam.create(newProducts);
        res.json(newProducts);
    } catch (error) {
        console.log('xeta');
    }
};

const deleteBasket = async (req, res) => {
    try {
        const { id } = req.params;
        await BasketIteam.findByIdAndDelete(id);
        res.json('silindi');
    } catch (error) {
        console.log('xeta');
    }
};

const increaseQuantity = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await BasketIteam.findById(id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        product.quantity += 1;
        await product.save();
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Error increasing quantity" });
    }
};

const decreaseQuantity = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await BasketIteam.findById(id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        if (product.quantity > 1) {
            product.quantity -= 1;
            await product.save();
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Error decreasing quantity" });
    }
};

export { getBasket, postBasket, deleteBasket, increaseQuantity, decreaseQuantity };
