function Profilecard({name, title}) {
  const isAdmin = title === 'Admin';

   return(
    <div className="card">
      <h2>{name}!</h2>
      <p>Title: {title}</p>
      {isAdmin && (<span className="badge">Admin</span>)}
    </div>
  );
}

export default Profilecard;