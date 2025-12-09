import React, { useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import emailjs from 'emailjs-com';

const CheckoutModal = ({ isOpen, onClose }) => {
    const { cart, cartTotal, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        address: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const orderDetails = cart.map(item => `- ${item.name} (${item.weight}) x ${item.quantity} = ₹${item.price * item.quantity}`).join('\n');

        // Prepare template parameters for EmailJS
        // We include standard 'message' and 'from_name' keys as they are common defaults
        const templateParams = {
            from_name: formData.name,
            to_name: 'Admin',
            message: `
New Order from ${formData.name}

WhatsApp: ${formData.whatsapp}
Address: ${formData.address}

Order Item Details:
${orderDetails}

Total Amount: ₹${cartTotal}
      `,
            // Custom keys if your template uses them specifically
            name: formData.name,
            whatsapp: formData.whatsapp,
            address: formData.address,
            order_details: orderDetails,
            total_amount: cartTotal,
            reply_to: formData.whatsapp // Just as a fallback
        };

        // Replace these with actual keys from User
        const SERVICE_ID = 'service_tpunv1c';
        const TEMPLATE_ID = 'template_2zhq4yd';
        const USER_ID = 'UtbpRI8xNFB7UK6n3';

        try {
            if (SERVICE_ID === 'YOUR_SERVICE_ID') {
                throw new Error('EmailJS keys are missing. Please configure them in CheckoutModal.jsx');
            }

            console.log("Sending email with params:", templateParams);
            const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
            console.log('SUCCESS!', response.status, response.text);

            setStatus('success');
            clearCart();
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setFormData({ name: '', whatsapp: '', address: '' });
            }, 3000);

        } catch (error) {
            console.error('FAILED...', error);
            if (error.text) console.error('Error Text:', error.text);
            if (error.status) console.error('Error Status:', error.status);
            setStatus('error');
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all scale-100">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <h2 className="text-xl font-serif font-bold text-gray-800">Checkout</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6">
                    {status === 'success' ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h3>
                            <p className="text-gray-600">We've received your order. We'll be in touch on WhatsApp shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="e.g. Priya Sharma"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                                <input
                                    type="tel"
                                    name="whatsapp"
                                    required
                                    placeholder="e.g. 98765 43210"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                                <textarea
                                    name="address"
                                    required
                                    rows="3"
                                    placeholder="Street, City, Pincode..."
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                                ></textarea>
                            </div>

                            {status === 'error' && (
                                <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm text-center border border-red-100">
                                    ⚠️ Error sending email. Check console for details.
                                </div>
                            )}

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-[#b03a0b] transition-all transform hover:scale-[1.01] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="animate-spin mr-2" />
                                            Processing...
                                        </>
                                    ) : (
                                        `Place Order • ₹${cartTotal}`
                                    )}
                                </button>
                                <p className="text-xs text-center text-gray-400 mt-3 flex items-center justify-center gap-1">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-10v6h2V7h-2z" /></svg>
                                    Secure checkout
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;
