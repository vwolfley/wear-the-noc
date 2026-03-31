type SuccessModalProps = {
  title?: string;
  message?: string;
  onClose: () => void;
};

export default function SuccessModal({
  title = "Thank You!",
  message = "Your email has been successfully submitted.",
  onClose,
}: SuccessModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
      <div className="rounded-lg bg-green-200 p-6 shadow-lg max-w-sm text-center">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p className="mb-4">{message}</p>
        <button
          className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
