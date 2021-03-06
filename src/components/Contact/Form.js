import React from 'react'

const Form = () => {
    return (
        <div className="text-gray-600">
            <h1 className="text-2xl font-semibold mt-3"> 
                <span className="bg-turbo-500">Ecrivez-nous ici</span> 👇
            </h1>
            <div className="flex items-center w-full">
                <div className="w-full bg-white rounded shadow p-8 m-4 md:max-w-sm md:mx-auto">
                    <form className="mb-4 md:flex md:flex-wrap md:justify-between"  method="post" action={`https://getform.io/f/8ddca5d3-daac-449c-97d2-3debd4ad0c8e`}>
                        <div className="flex flex-col mb-4 md:w-full">
                            <label className="mb-2 tracking-wide font-bold text-lg text-grey-darkest" for="first_name">Votre Nom Complet</label>
                            <input className="border py-2 px-3 text-grey-darkest focus:outline-none focus:ring-2 focus:ring-turbo-600 focus:ring-opacity-50" type="text" name="first_name" id="first_name" placeholder="Credo Lokossou" required/>
                        </div>
                        <div class="flex flex-col mb-4 md:w-full">
                            <label className="mb-2 font-bold text-lg text-grey-darkest" for="email">Adresse e-mail</label>
                            <input className="border py-2 px-3 text-grey-darkest focus:outline-none focus:ring-2 focus:ring-turbo-600 focus:ring-opacity-50" type="email" name="email" id="email"  placeholder="creafrikagroup@gmail.com" required/>
                        </div>
                        <div class="flex flex-col mb-4 md:w-full">
                            <label className="mb-2 font-bold text-lg text-grey-darkest" for="phone">Numéro de Téléphone</label>
                            <input className="border py-2 px-3 text-grey-darkest focus:outline-none focus:ring-2 focus:ring-turbo-600 focus:ring-opacity-50" type="tel" id="phone" name="phone"  placeholder="0086 123 45 678"/>
                        </div>
                                    
                        <div className="flex flex-col mt-5 md:w-full">
                            <label className="mb-2 font-bold text-lg text-grey-darkest" for="message">Comment pouvons-nous vous aider?</label>
                            <textarea name="message" id="message"  className="resize-none p-2 h-36 border rounded focus:outline-none focus:ring-2 focus:ring-turbo-600 focus:ring-opacity-50" placeholder="Nous sommes ici pour vous accompagner dans vos projets, avec notre expertise." rows="4" required></textarea>
                        </div>

                        <div className="mt-10 mx-auto transform transition duration-500 hover:scale-110">
                            <button type="submit" className="text-white bg-curious-blue-600 font-bold py-3 md:py-2 px-4 text-xl hover:text-turbo-400">Envoyez🚀</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form