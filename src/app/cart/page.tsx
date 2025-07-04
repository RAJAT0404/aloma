import React from "react";
import Layout from "@/components/layout";
import CartSummary from "@/components/CartSummary/CartSummary";

const  Cart= () => {
    return (
        <Layout>
            <div className="min-h-screen bg-background">
                <CartSummary/>
            </div>
        </Layout>
    );
};

export default Cart;
