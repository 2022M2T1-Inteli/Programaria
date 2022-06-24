import Jobs from './jobs.model.js';
import Bonus from './bonus.model.js';
import CandidatesGraduations from './candidates_graduations.model.js';
import Candidates from './candidates.model.js';
import Companies from './companies.model.js';
import GraduationNamespaces from './graduation_namespaces.model.js';
import HardSkills from './hardskills.model.js';
import SoftSkills from './softskills.model.js';
import JobContacts from './job_contacts.model.js';
import Departaments from './departaments.model.js';
import Admins from './admin.model.js';

const jobs = new Jobs();
const bonus = new Bonus();
const candidatesGraduations = new CandidatesGraduations();
const candidates = new Candidates();
const companies = new Companies();
const graduationNamespaces = new GraduationNamespaces();
const hardSkills = new HardSkills();
const softSkills = new SoftSkills();
const jobContacts = new JobContacts();
const departaments = new Departaments();
const admins = new Admins();

export { admins, jobs, bonus, candidatesGraduations, candidates, companies, graduationNamespaces, hardSkills, softSkills, jobContacts, departaments };
