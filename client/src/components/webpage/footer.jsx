const Footer = () => {
    return (
      <div className="flex flex-row w-screen h-screen justify-around items-center  border-t-4 dark:border-cyan-200 border-cyan-900">
        <div className="w-footer">
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <p>Get in touch with us if you have any suggestions or information to help this idea.</p>
          <div>
            <ion-icon name="leaf-outline" className="bg-dark dark:bg-light w-16" />
            <ion-icon name="leaf-outline" />
          </div>
          <p className="mt-8 mb-2 text-4xl font-bold">Follow Us ...</p>
          <div className="flex flex-row">
            <ion-icon name="logo-linkedin" className="mx-4 text-4xl" />
            <ion-icon name="logo-twitter" className="mx-4 text-4xl" />
            <ion-icon name="logo-facebook" className="mx-4 text-4xl" />
          </div>
        </div>
        <form id="form" method="post" action="https://formspree.io/f/mqkolpld" className="w-half h-footer flex flex-col items-center">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              <input
                type="text"
                id="same"
                name="user-name"
                placeholder="Full Name"
                maxLength="30"
                className="block w-input h-logo rounded-md border-2 dark:border-cyan-200 border-cyan-900 my-4 py-1.5 text-gray-900 sm:text-sm sm:leading-6 bg-slate-100 placeholder:text-gray-600" />
            </label>
          </div>
          <div>
            <label htmlFor="mail" className="block text-sm font-medium leading-6 text-gray-900">
              <input
                type="email"
                id="email"
                name="user-email"
                placeholder="Email"
                maxLength="30"
                className="block w-input h-logo rounded-md border-2 dark:border-cyan-200 border-cyan-900 my-4 py-1.5 text-gray-900 sm:text-sm sm:leading-6 bg-slate-100 placeholder:text-gray-600" />
            </label>
          </div>
          <div>
            <label htmlFor="msg" className="block text-sm font-medium leading-6 text-gray-900">
              <textarea
                id="message"
                name="user_message"
                maxLength="500"
                className="block w-input h-input rounded-md border-2 dark:border-cyan-200 border-cyan-900 py-1.5 my-4  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 bg-slate-100 sm:text-sm sm:leading-6"
                placeholder="Write your message here"></textarea>
            </label>
          </div>
          <button type="submit" className="text-2xl font-bold bg-gold rounded-3xl mx-2 px-4 py-2 text-light">Get in touch</button>
        </form>
      </div>
    );
  }
  
  export default Footer;
  