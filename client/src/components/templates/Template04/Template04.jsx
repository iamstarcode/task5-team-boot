import React from 'react'
import PropTypes from 'prop-types'
import ofadaRiceImg from '../../../assets/images/ofada-rice.png'
import palmOil from '../../../assets/images/palm-oil.png'
import pepper from '../../../assets/images/pepper.png'
import meat from '../../../assets/images/meat.png'
import seasoning from '../../../assets/images/seasoning.png'
import ballPepper from '../../../assets/images/ball-pepper.png'
import spice from '../../../assets/images/spice.png'
import Button from '../../Button/Button'

export function Template04({ editable }) {
    return (
        <div className="py-10 flex-col  flex bg-[#E1E1E1] w-full items-start gap-10 ">
            {/* front page */}
            <Front editable={editable} />
            {/* back page */}
            <Back editable={editable} />
        </div>
    )
}

export function Front({ editable }) {
    return (
        <div className="lg:w-[536px] m-auto max-[670px]:w-[400px] max-[460px]:w-[320px]">
            <div
                className="mb-4 bg-[#F08200] text-white rounded-xl w-full flex flex-col justify-center
                items-center h-[138px]"
            >
                <h4
                    contentEditable={editable || false}
                    className="text-2xl mb-4 font-semibold focus:border-none focus:outline-none"
                >
                    Add your own recipe
                </h4>
                <p
                    contentEditable={editable}
                    className="w-[80%] text-center text-lg"
                >
                    Upload your recipe and share it with other members of the
                    community
                </p>
            </div>
            <div className="relative rounded-xl bg-[#F6F4DF] max-h-max flex flex-col items-center">
                <img src={ofadaRiceImg} alt="" />
                <div
                    className="bg-[#F08200] max-[460px]:w-[80%] mt-[-20px] rounded-xl w-[354px]  h-[70px] 
                    flex justify-center items-center text-white"
                >
                    <h2
                        contentEditable={editable}
                        className="text-2xl font-bold"
                    >
                        Ofada rice and stew
                    </h2>
                </div>

                <div
                    className="my-20 space-x-6 max-[460px]:space-x-[0px]
                    grid place-items-center space-y-4 md:space-y-0 lg:flex md:flex
                    max-[670px]:space-x-0 lg:space-x-20"
                >
                    <Button variant="orange">Print Template</Button>
                    <Button variant="border-orange">Print Template</Button>
                </div>
            </div>
        </div>
    )
}

export function Back({ editable }) {
    return (
        <div className="w-[536px] max-[670px]:w-[400px] flex flex-col gap-10 m-auto max-[460px]:w-[320px]">
            <div className="bg-[#F6F4DF] rounded-xl pl-8 py-6">
                <h4 className="text-[#F08200] font-bold mb-4 text-xl text-center">
                    Cooking Instructions
                </h4>
                <p
                    contentEditable={editable}
                    className="text-md ml-3 w-[80%] leading-[29px]"
                >
                    Get a clean bowl of water Pour the ofada rice into the bowl
                    of water and wash Put a pot on fire Add 7 cups of water Also
                    add salt, vegetable oil and washed Ofada rice. Cover the pot
                    and cook until ofada rice is soft . when ofada rice is soft
                    enough, remove it Place a basket on top of a bowl Pour the
                    Ofada rice into the basket to remove water
                </p>
            </div>

            <div className="bg-[#F6F4DF] rounded-xl grid place-items-center  py-6">
                <h4 className="text-[#F08200] font-bold  text-xl text-center">
                    Ingriedents
                </h4>
                <div className="grid grid-cols-3 p-8 gap-10">
                    <div className="flex flex-col items-start gap-2">
                        <img src={pepper} alt="" />
                        <p
                            contentEditable={editable}
                            className="text-sm text-[#F08200] font-semibold"
                        >
                            Pepper
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <img src={ballPepper} alt="" />
                        <p
                            contentEditable={editable}
                            className="text-sm text-[#F08200] font-semibold"
                        >
                            Bell Pepper
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <img src={meat} alt="" />
                        <p
                            contentEditable={editable}
                            className="text-sm text-[#F08200] font-semibold"
                        >
                            Meat
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <img src={palmOil} alt="" />
                        <p
                            contentEditable={editable}
                            className="text-sm text-[#F08200] font-semibold"
                        >
                            Palm Oil
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <img src={seasoning} alt="" />
                        <p
                            contentEditable={editable}
                            className="text-sm text-[#F08200] font-semibold"
                        >
                            Seasoning
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <img src={spice} alt="" />
                        <p
                            contentEditable={editable}
                            className="text-sm text-[#F08200] font-semibold"
                        >
                            Spices
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

Template04.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}

Front.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}

Back.propTypes = {
    editable: PropTypes.oneOf(['true', 'false']),
}
