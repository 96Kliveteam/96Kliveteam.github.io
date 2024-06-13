import logo from '../assets/short-logo.PNG'

const Loading = ({ children, loading }) => {
    return loading ? (
        <>
            <div className='w-full fixed bottom-0 bg-n-9 z-40 animate-h'>
            </div>
            <div className={`overflow-hidden bg-black opacity-0 fixed bottom-0 z-30 animate-show`}>
                <img src={logo} alt="" className='w-screen h-screen' />
            </div>
        </>
    ) :(
        <>{children}</>
    )
}

export default Loading