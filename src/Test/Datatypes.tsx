function Datatype(){
    let a:number =10;
    let b:boolean=true;
    let c:string ='this is string';
    let d:any = 10;
    let e:undefined=undefined;
    return(
        <>
        <h1>this is the number::
            `${a}`
        </h1>
         <h1>this is the boolean::
            `${b}`
        </h1>
         <h1>this is the String::
            `${c}`
        </h1>
         <h1>this is the any type
            ::
            `${d}`
        </h1>
         <h1>this is the undefined::
            `${e}`
        </h1>      
        
        </>
    );
};
export default Datatype;