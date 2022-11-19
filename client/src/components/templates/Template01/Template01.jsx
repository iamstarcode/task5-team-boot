import React from 'react'
import PropTypes from 'prop-types'
import Alarm from '../../../assets/icons/template00-03/Alarm.svg'
import useImages from '../../../utils/template00-03/useImages'

export function Template01({ editable }) {
    return (
        // temporary div to give gray background
        <div className="w-full py-10 px-10 flex flex-col gap-[32px] bg-[#E1E1E1] font-['Georgia']">
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
    const { template01Cover } = useImages()

    return (
        <div className="flex h-[100%]">
            <div className="w-[32.77%] h-[100%] px-[30px] pt-[42px] pb-[73px] flex flex-col gap-[103px] items-center justify-center bg-[#A45118]">
                <div className="w-[3px] h-[16.86%] bg-[#fff]" />

                <h1
                    contentEditable={editable || 'false'}
                    className="text-[32px] text-[#fff] text-center px-[16px] leading-[53px]"
                >
                    BANANA CAKE RECIPE
                </h1>

                <div className="w-[3px] h-[16.86%] bg-[#fff]" />

                <div className="flex gap-[5px]">
                    <img src={Alarm} alt="Alarm" />
                    <p
                        contentEditable={editable || 'false'}
                        className="font-[500] text-[#fff]"
                    >
                        45 mins
                    </p>
                </div>
            </div>
            <div className="w-[67.23%] h-[100%] bg-[#fff]">
                <img
                    src={template01Cover}
                    alt="Template 01 Cover"
                    className="w-[100%] h-[100%] object-cover"
                />
            </div>
        </div>
    )
}

function Back({ editable }) {
    const { template01BackImage } = useImages()

    return (
        <div className="w-full h-full px-[45px] py-[65px]">
            <div className="w-full h-full flex flex-col gap-[50px]">
                <div className="relative w-[100%] h-[30.17%]">
                    <img
                        src={template01BackImage}
                        alt="Template 01 back page image"
                        className="w-[100%] h-[100%] object-cover"
                    />
                </div>

                <div className="w-full h-full flex gap-[18px]">
                    <div className="w-[36.6%] h-[100%] px-[14px] py-[34px] bg-[#A45118]">
                        <h1
                            contentEditable={editable || 'false'}
                            className="text-[18px] text-[#fff] font-[400] mb-[37px]"
                        >
                            INGREDIENTS
                        </h1>

                        <ul className="flex flex-col gap-[32px] text-[#fff] list-disc ml-[32px]">
                            <li contentEditable={editable || 'false'}>
                                125g butter
                            </li>
                            <li contentEditable={editable || 'false'}>
                                3/4 cup caster sugar
                            </li>
                            <li contentEditable={editable || 'false'}>
                                1 tsp vanilla essence
                            </li>
                            <li contentEditable={editable || 'false'}>1 egg</li>
                            <li contentEditable={editable || 'false'}>
                                2 bannana mashed ripe
                            </li>
                            <li contentEditable={editable || 'false'}>
                                1 1/2 cups of floor
                            </li>
                            <li contentEditable={editable || 'false'}>
                                1/4 cup of milk
                            </li>
                        </ul>
                    </div>

                    <div className="w-[63.4%] h-[100%] px-[14px] py-[34px] bg-[#fff]">
                        <h1
                            contentEditable={editable || 'false'}
                            className="text-[18px] font-[400] mb-[37px]"
                        >
                            INSTRUCTIONS
                        </h1>

                        <ol className="flex flex-col gap-[32px] list-decimal ml-[32px] font-[400] leading-[18px]">
                            <li contentEditable={editable || 'false'}>
                                Melt the butter, sugar and vanilla in a
                                medium-sized saucepan
                            </li>
                            <li contentEditable={editable || 'false'}>
                                Remove from the heat.
                            </li>
                            <li contentEditable={editable || 'false'}>
                                Add mashed bananas and stir through until just
                                combined.
                            </li>
                            <li contentEditable={editable || 'false'}>
                                Bake at 170C for approximately 40 minutes.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

Template01.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}

Front.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}

Back.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}
