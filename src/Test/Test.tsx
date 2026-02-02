function Test(){
    let isloggedin:boolean= true;

    return(
        <>
        {!isloggedin? (<button>Plx Login</button>):(<button>Logout</button>)}
        
        </>
    );
};
export default Test;