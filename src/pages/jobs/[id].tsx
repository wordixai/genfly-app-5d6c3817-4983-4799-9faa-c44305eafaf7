import { useParams } from 'react-router-dom'
import { jobs } from '@/lib/mockData'
import { Briefcase, MapPin, Clock, DollarSign, Check, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const JobDetail = () => {
  const { id } = useParams()
  const job = jobs.find(job => job.id === id)

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Job Not Found</h1>
          <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Job Board
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Job Details</h1>
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
        <div className="bg-white overflow-hidden shadow-sm rounded-lg">
          <div className="px-6 py-5">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-16 w-16 rounded-md bg-gray-100 flex items-center justify-center">
                <img 
                  src={job.company.logo} 
                  alt={job.company.name}
                  className="h-12 w-12 object-cover rounded-md"
                />
              </div>
              <div className="ml-4 flex-1">
                <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
                <Link 
                  to={`/companies/${job.company.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-lg text-blue-600 hover:text-blue-800"
                >
                  {job.company.name}
                </Link>
                <div className="mt-2 flex flex-wrap items-center text-sm text-gray-500">
                  <div className="flex items-center mr-4 mb-2">
                    <MapPin className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center mr-4 mb-2">
                    <Briefcase className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center mr-4 mb-2">
                    <Clock className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                    <span>Posted {job.postedAt}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <DollarSign className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                    <span>{job.salary}</span>
                  </div>
                </div>
              </div>
              <div className="ml-4">
                <a
                  href={job.company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Apply Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-6 py-5">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Job Description</h3>
            <p className="text-gray-700 mb-6">{job.description}</p>

            <h3 className="text-lg font-medium text-gray-900 mb-4">Requirements</h3>
            <ul className="space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <Check className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export default JobDetail