import React,{use, useState} from "react";
function Header({ title, subtitle }) {
  return (
    <div style={styles.headerContainer}>
      <h1 style={styles.mainTitle}>{title}</h1>
      
      {subtitle && <p style={styles.subtitle}>{subtitle}</p>} 
    </div>
  );
}
// function Header({title,subtitle}){
//     return(
//         <div style={styles.headerContainer}>
//             <h1 style={styles.mainTitle}>{title}</h1>
//             {subtitle && <p style={styles.subtitle}></p>}
//         </div>
//     );
// }
function Mainbar({side}){
    const [headerTitle,setHeaderTitle] = useState("TenderGPT");
    return(
        <div className="SideToolbar">
            <div className="SideComponents">
                <Header title ={headerTitle} subtitle={"AI-Powered Document Retrieval and Intelligence System"}/>
            </div>
        </div>
    )
}

const styles = {        
    headerContainer: {
        textAlign: 'center',
        margin: '40px 0',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    mainTitle: {
        fontSize: '2rem',
        fontWeight: '800',
        color: '#ffffff',
        letterSpacing: '-1px',
        margin: '0 0 8px 0',
        textShadow: '0 2px 4px rgba(0,0,0,0.2)'
    },
    subtitle: {
        fontSize: '1rem',
        color: '#8a99ad',
        margin: 0,
        fontWeight: '400'
    },
    input: {
        flex: 5,
        height: 30,
        borderRadius: 10,
        border: 'none',
        padding: '0 12px',
        background: 'transparent',
        color: 'white',
        outline: 'none',
        fontSize: 15
    }
};
export default Mainbar;