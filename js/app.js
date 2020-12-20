import React from "react";


import Header from "./header";
import Product from "./product";

function App(){
    return (
        <div className='wrapper'>
            <Header/>
            <div className='item'>
                <Product title='A Sign of Four' author='Sir Arthur Conan Doyle' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate"/>      
                <Product title="A Study in Scarlet" author="Sir Arthur Conan Doyle" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate" />
                <Product title="Baskervilles Hound" author="Sir Arthur Conan Doyle" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate" />
                <Product title="The Adventures of Sherlock Holmes" author="Sir Arthur Conan Doyle" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate" />
            </div>   
            
        </div>
)
}

export default App;

