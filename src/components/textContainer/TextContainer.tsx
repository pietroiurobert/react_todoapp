import './style.css'

function load(){
    console.log('container loaded')
}

export default function(props: any){
    return (
        <>
            <div className="container" onClick={load}>
                {props.text}
            </div>
        </>
    )
}