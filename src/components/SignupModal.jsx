const SignupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-xl w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 mb-4 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-4 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
        />
        <button className="w-full hover:bg-blue-400 bg-blue-500 text-white py-2 rounded mb-2 cursor-pointer">
          Create Account
        </button>
        <button
          onClick={onClose}
          className="text-sm text-blue-500 underline block text-center cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SignupModal;
