
const Button = ({ label, moviebtn }) => {

  return(
    <>
      {label && (
        <button className="bg-red-500 text-bold text-white p-2 mt-8 rounded">{label}</button>
      )}

      {moviebtn && (
        <button className="w-full bg-red-700 font-bold text-white p-2 mt-8 rounded">{moviebtn}</button>
      )}

     
    </>
  )
}

export default Button;