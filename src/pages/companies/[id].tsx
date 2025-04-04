import { useParams } from 'react-router-dom'
import { companies, jobs } from '@/lib/mockData'
import { Building2, MapPin, Link as LinkIcon, Briefcase } from 'lucide-react'
import { Link } from 'react-router-dom'

const CompanyProfile = () => {
  const { id } = useParams()
  const companyId = id?.replace(/-/g, ' ')
  const company = companies.find(c => c.name.toLowerCase() === companyId)

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Company Not Found</h1>
          <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Job Board
          </Link>
        </div>
      </div>
    )
  }

  const companyJobs = jobs.filter(job => company.jobs.includes(job.id))

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Company Profile</h1>
            <Link 
              to="/" 
              className="text-blue-500 hover:text-blue-700 flex items-center"
            >
              <span className="mr-1">Back to jobs</span>
              <Briefcase className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm rounded-lg mb-6">
          <div className="px-6 py-5">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-16 w-16 rounded-md bg-gray-100 flex items-center justify-center">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-12 w-12 object-cover rounded-md"
                />
              </div>
              <div className="ml-4 flex-1">
                <h2 className="text-2xl font-bold text-gray-900">{company.name}</h2>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <a 
                    href={company.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <LinkIcon className="flex-shrink-0 mr-1.5 h-5 w-5" />
                    <span>Company Website</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-6 py-5">
            <h3 className="text-lg font-medium text-gray-900 mb-4">About</h3>
            <p className="text-gray-700">{company.description}</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Open Positions</h2>
        <div className="grid gap-6">
          {companyJobs.map((job) => (
            <Link 
              to={`/jobs/${job.id}`} 
              key={job.id}
              className="bg-white overflow-hidden shadow-sm rounded-lg hover:shadow-md transition-shadow duration-200"
            >
              <div className="px-6 py-5">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center text-sm text-gray-500">
                      <div className="flex items-center mr-4">
                        <MapPin className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

export default CompanyProfile