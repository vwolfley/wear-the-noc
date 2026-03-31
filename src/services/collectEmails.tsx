const submitEmail = async (email: string) => {
  try {
    const res = await fetch("http://localhost:5000/api/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

export default submitEmail;