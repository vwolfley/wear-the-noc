

export default function SuccessAlert() {
  return (
    <div
      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Thank You!</strong>
      <span className="block sm:inline">Your email has been successfully submitted.</span>
    </div>
  );
}
