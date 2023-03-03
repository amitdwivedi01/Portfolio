import React from 'react';

const NavigationDots = ( {active}) => {
  return (
    <div className='app__navigation'>
         {["Home", "About", "Skills", "Work", "Contact"].map((items, index) => (
            <a href={`#${items}`}
            key={items + index}
            className='app__navigation-dot'
            style={active === items ? { backgroundColor: '#313BAC'} : {}}
            />
        ))}
    </div>
  )
}

export default NavigationDots