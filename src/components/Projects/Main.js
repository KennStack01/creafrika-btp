import React from 'react'
import { IoIosDownload } from 'react-icons/io'
import { graphql, useStaticQuery } from 'gatsby'
import Project from './Project'
import { Link } from 'gatsby'



export default function Main() {

    const data = useStaticQuery(graphql`
        query {
            allContentfulProject {
                edges {
                    node {
                        imagePrincipale {
                            file {
                                url
                            }
                        }
                        nomDuProjet
                        localisation
                        slug
                    }
                }
            }
        }
    `)

    const projects = data.allContentfulProject.edges.map(({node}) => node)


    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-semibold mx-2 mt-10 text-gray-600">Vous satisfaire est notre Priorité Première</h1>
            <p className="text-justify md:text-xl md:text-center mx-5 my-8 md:mx-40">
                Découvrez quelques uns de nos Projets...
            </p>

            <div className="my-14">
                <div className="flex flex-row mx-auto w-80 p-2 bg-curious-blue-500 font-medium py-4 md:py-2 text-lg text-white my-14">
                    <p className="my-auto mx-auto flex flex-row font-semibold">
                        Explorez nos Projets
                        <div className="text-white text-3xl" >
                            <IoIosDownload/>
                        </div>
                    </p>
                </div>
            </div>

            {/* Project List */}
            <div className="grid grid-cols-1 md:grid-cols-3">
                {projects.map(project => (
                    <div>
                        <Project key={project.slug} picture={project.imagePrincipale.file.url} name={project.nomDuProjet} location={project.localisation} slug={project.slug} />
                    </div>
                ))}
            </div>
            <div className="mt-8 mb-10 transform transition duration-500 hover:scale-110 my-12">
                <Link to="/contact" className="p-3 bg-curious-blue-500 font-semibold py-4 md:py-2 px-3 text-2xl hover:bg-curious-blue-600 text-white my-20">
                    Contactez-nous!
                </Link>
            </div>

        </div>
    )
}

