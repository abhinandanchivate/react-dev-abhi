import React from 'react'

const Landing = () => {
  return (
    <>
       <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <a href="register.html" className="btn btn-primary">Sign Up</a>
            <a href="login.html" className="btn btn-light">Login</a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Landing
// import React from 'react'
// import  : to access React from 'react' package.
// const : constant declaration for the Landing component. can we change anything for const ? 
// Landing : name of the component.
// () : function declaration syntax for the component.
// return : returns the JSX to be rendered. (
//     <div>
//       Landing
//     </div>
//   ) return () ==> we will rrendering UI will place it inside the return statement.
// export : can be used by other files to import this component.