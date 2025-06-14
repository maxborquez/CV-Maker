function PersonalInfo({
  fullName,
  setFullName,
  email,
  setEmail,
  phone,
  setPhone,
}) {
  return (
    <>
      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        style={{ marginLeft: "10px" }}
        placeholder="Full Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginLeft: "10px" }}
        placeholder="Email"
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ marginLeft: "10px" }}
        placeholder="Phone number"
      />
    </>
  );
}

export default PersonalInfo;
