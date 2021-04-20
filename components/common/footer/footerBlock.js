import React from 'react'
import { FooterContent, policy, category, contact } from '../constants/constants'
const createLinks = (blockType) => {
    switch (blockType) {
        case policy:
            return FooterContent[0];
        case category:
            return FooterContent[1];
        case contact:
            return FooterContent[2];
    }
}
const footerBlock = (props) => {
    const blockType = createLinks(props.blockType);
    return (

        <div class="lg:w-1/3 md:w-1/2 w-full px-3">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">{blockType.heading}</h2>
            <nav class="list-none mb-10">
                <li>
                    <a class="text-gray-600 hover:text-gray-800">{blockType.one}</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">{blockType.two}</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">{blockType.three}</a>
                </li>
                <li>
                    <a class="text-gray-600 hover:text-gray-800">{blockType.four}</a>
                </li>
            </nav>
        </div>

    )
}

export default footerBlock
