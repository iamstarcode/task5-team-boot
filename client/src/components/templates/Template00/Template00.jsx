import React from 'react'
import PropTypes from 'prop-types'
import useImages from '../../../utils/template00-03/useImages'

export function Template00({ editable }) {
    return (
        // temporary div to give gray background
        <div className="w-full py-10 px-10 flex flex-col gap-[32px] bg-[#E1E1E1]">
            <div className="w-[796.8px] h-[1123.2px] m-auto bg-[#fff]">
                <Front editable={editable} />
            </div>

            <div className="w-[796.8px] h-[1123.2px] m-auto bg-[#fff]">
                <Back editable={editable} />
            </div>
        </div>
    )
}

function Front({ editable }) {
    const { template00Cover } = useImages()
    return (
        <>
            <div className="w-full flex align-center justify-center py-[38px] bg-[#F67A24]">
                <h1
                    className="text-white text-[32px] font-[600]"
                    contentEditable={editable || 'false'}
                >
                    How to make Smoothie
                </h1>
            </div>
            <div className="relative py-[62px]">
                <div className="absolute w-full h-[116px] top-[42%] bg-[#F67A24]" />
                <div className="relative top-0 left-[19.5%] w-[61%] h-[64%]">
                    <img
                        src={template00Cover}
                        alt="Template 00 Cover image"
                        className="w-[100%] h-[100%] objet-cover"
                    />
                </div>
            </div>

            <div className="flex items-center gap-[27px]">
                <div className="w-full h-[2px] bg-[#8C8C8D]"></div>
                <p
                    contentEditable={editable || 'false'}
                    className="shrink-0 text-[24px] font-[600]"
                >
                    Material used
                </p>
                <div className="w-full h-[2px] bg-[#8C8C8D]"></div>
            </div>

            <div className="flex justify-between items-center px-[20px] py-[35px]">
                <ul className="flex flex-col gap-[26px] list-disc mx-[80px]">
                    <li
                        contentEditable={editable || false}
                        className="text-[18px]"
                    >
                        Glass cup
                    </li>
                    <li
                        contentEditable={editable || false}
                        className="text-[18px]"
                    >
                        Knife
                    </li>
                    <li
                        contentEditable={editable || false}
                        className="text-[18px]"
                    >
                        Blender
                    </li>
                </ul>
                <ul className="flex flex-col gap-[26px] list-disc mx-[80px]">
                    <li
                        contentEditable={editable || false}
                        className="text-[18px]"
                    >
                        Glass cup
                    </li>
                    <li
                        contentEditable={editable || false}
                        className="text-[18px]"
                    >
                        Knife
                    </li>
                    <li
                        contentEditable={editable || false}
                        className="text-[18px]"
                    >
                        Blender
                    </li>
                </ul>
                <ul className="flex flex-col gap-[26px] list-disc mx-[80px]">
                    <li
                        contentEditable={editable || false}
                        className="text-[18px]"
                    >
                        Glass cup
                    </li>
                    <li
                        contentEditable={editable || false}
                        className="text-[18px]"
                    >
                        Knife
                    </li>
                    <li
                        contentEditable={editable || false}
                        className="text-[18px]"
                    >
                        Blender
                    </li>
                </ul>
            </div>
        </>
    )
}

function Back({ editable }) {
    return (
        <div className="flex flex-col gap-[64px] p-[20px] mt-[30px]">
            <div className="relative w-full rounded-[8px] border-[2px] border-[#B4B4B4] border-solid">
                <div className="absolute top-[-10%] left-[10.84%] w-[78.32%] px-[166px] py-[15px] rounded-[8px] bg-[#F67A24] flex items-center justify-center">
                    <p
                        contentEditable={editable || false}
                        className="text-[#fff] text-[24px] font-[600]"
                    >
                        Ingredients
                    </p>
                </div>
                <div className="relative pt-[42px]">
                    <div className="flex justify-between items-center px-[20px] py-[35px]">
                        <ul className="flex flex-col gap-[48px] list-disc mx-[40px]">
                            <li
                                contentEditable={editable || false}
                                className="text-[18px]"
                            >
                                lime
                            </li>
                            <li
                                contentEditable={editable || false}
                                className="text-[18px]"
                            >
                                Orange
                            </li>
                            <li
                                contentEditable={editable || false}
                                className="text-[18px]"
                            >
                                Water
                            </li>
                            <li
                                contentEditable={editable || false}
                                className="text-[18px]"
                            >
                                Watermelon
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-[34px] list-disc mx-[40px]">
                            <li
                                contentEditable={editable || false}
                                className="text-[18px]"
                            >
                                lime
                            </li>
                            <li
                                contentEditable={editable || false}
                                className="text-[18px]"
                            >
                                Orange
                            </li>
                            <li
                                contentEditable={editable || false}
                                className="text-[18px]"
                            >
                                Water
                            </li>
                            <li
                                contentEditable={editable || false}
                                className="text-[18px]"
                            >
                                Watermelon
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="relative w-full rounded-[8px] border-[2px] border-[#B4B4B4] border-solid">
                <div className="absolute top-[-6%] left-[10.84%] w-[78.32%] px-[166px] py-[15px] rounded-[8px] bg-[#F67A24] flex items-center justify-center">
                    <p
                        contentEditable={editable || false}
                        className="text-[#fff] text-[24px] font-[600]"
                    >
                        Preparation
                    </p>
                </div>
                <div className="relative pt-[42px]">
                    <div className="flex flex-col gap-[64px] px-[20px] py-[35px]">
                        <div>
                            <p
                                contentEditable={editable || false}
                                className="text-[18px] font-[600] mb-[8px]"
                            >
                                &bull; Step 1
                            </p>
                            <p
                                contentEditable={editable || false}
                                className="text-[18px]"
                            >
                                Put your rice into a bowl and soak with hot
                                water.. Allow this to soak for 10-15 minutes.
                                Then, wash with warm water and... Heat up your
                                oil.
                            </p>
                        </div>
                        <div>
                            <p
                                contentEditable={editable || false}
                                className="text-[18px] font-[600] mb-[8px]"
                            >
                                &bull; Step 2
                            </p>
                            <p
                                contentEditable={editable || false}
                                className="text-[18px]"
                            >
                                Put your rice into a bowl and soak with hot
                                water.. Allow this to soak for 10-15 minutes.
                                Then, wash with warm water and... Heat up your
                                oil.
                            </p>
                        </div>
                        <div>
                            <p
                                contentEditable={editable || false}
                                className="text-[18px] font-[600] mb-[8px]"
                            >
                                &bull; Step 3
                            </p>
                            <p
                                contentEditable={editable || false}
                                className="text-[18px]"
                            >
                                Put your rice into a bowl and soak with hot
                                water.. Allow this to soak for 10-15 minutes.
                                Then, wash with warm water and... Heat up your
                                oil.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Template00.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}

Front.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}

Back.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}
