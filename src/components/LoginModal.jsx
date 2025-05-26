const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
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
        <button className="w-full bg-blue-500 text-white py-2 rounded mb-2">
          Submit
        </button>
        <button
          onClick="{onClose}"
          className="text-sm text-blue-500 underline block text-center"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default LoginModal;
