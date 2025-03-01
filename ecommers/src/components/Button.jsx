/* eslint-disable react/prop-types */



// eslint-disable-next-line no-unused-vars
function Button({children, type = 'button', bgColor = 'black', ...props}) {


  return (
    <div>
        <button className={`px-4  py-5 rounded-xl ${bgColor}`}{...props}>
            {children}
        </button>
    </div>
  )
}

export default Button