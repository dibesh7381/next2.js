import React from 'react'

const Footer = () => {
  return (
    <div className="h-[100px] bg-lime-200 fixed bottom-0 w-full flex items-center justify-center">
      <span className="text-blue-400">&copy; Your Business Might need to file a <span className="font-extrabold">BOI report</span> to be compliant with the corporate Transparency Act <a className="underline font-extrabold" href="/">File My Report</a></span>
    </div>
  )
}

export default Footer
