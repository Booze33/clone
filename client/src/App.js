// import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : 'system');
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(darkQuery, "darkQuery");
  const options = [
    {
      icon: "sunny",
      text: "light"
    },
    {
      icon: "moon",
      text: "dark"
    },
    {
      icon: "desktop-outline",
      text: "system"
    }
  ];

  const onWindowMatch = () => {
    if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)){
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  onWindowMatch();

  useEffect(()=> {
    switch (theme) {
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;
      default:
        localStorage.removeItem('theme');
        onWindowMatch();
        break;
    }
  }, [theme]);

//   darkQuery.addEventListener("change", (e) => {
//     if(!("theme" in localStorage)) {
//       if(e.matches){
//         element.classList.add("dark");
//       } else {
//         element.classList.remove("dark");
//       }
//     }
//   })

//   return (
//     <div className="dark:bg-dark dark:text-dark w-screen h-52" >
//       <div className="fixed top-5 right-10 duration-100 dark:bg-slate-700 bg-gary-100 rounded-full">
//         {
//           options?.map(opt => (
//             <button
//               key={opt.text}
//               className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && "text-sky-600"}`}
//               onClick={()=> setTheme(opt.text)}>
//               <ion-icon name={opt.icon}></ion-icon>
//             </button>
//           ))
//         }
        
//       </div>

//       <h1>Theme</h1>
//       <p>lorem this is the test for handling theme pray it works</p>
//       <p>lorem this is the test for handling theme pray it works</p>
//       <p>lorem this is the test for handling theme pray it works</p>
//       <p>lorem this is the test for handling theme pray it works</p>

//       {/* <button onClick={() => handleThemeChange('dark')}>Set Dark Theme</button>
//       <button onClick={() => handleThemeChange('light')}>Set Light Theme</button> */}
//     </div>
//   );
}

export default App;
