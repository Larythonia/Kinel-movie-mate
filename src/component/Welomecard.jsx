function WelcomeCard({ name, role }) {
  const isAdmin = role === 'Admin';
  return(
    <div className="card">
      <h2>Hello, {name}!</h2>
      <p>Role: {role}</p>
      {isAdmin && (<span className="badge">Admin</span>)}
    </div>
  );
}
  
export default WelcomeCard;