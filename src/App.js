import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  Scale, 
  AlertTriangle, 
  Calendar, 
  Users, 
  Gavel, 
  Eye 
} from 'lucide-react';

const OsteenFilesApp = () => {
  const [activeSection, setActiveSection] = useState('executive-summary');

  const navigationItems = [
    { id: 'executive-summary', label: 'Executive Summary', icon: FileText },
    { id: 'timeline', label: 'Timeline Analysis', icon: Calendar },
    { id: 'evidence', label: 'Evidence Database', icon: Search },
    { id: 'violations', label: 'Constitutional Violations', icon: Scale },
    { id: 'conspiracy', label: 'Interstate Conspiracy', icon: Users },
    { id: 'misconduct', label: 'Institutional Misconduct', icon: AlertTriangle },
    { id: 'bad-actors', label: 'Bad Actors Album', icon: Eye },
    { id: 'litigation', label: 'Federal Litigation', icon: Gavel }
  ];

  // Define all render functions BEFORE renderContent
  const renderExecutiveSummary = () => (
    <div className="space-y-6">
      <div className="bg-red-50 border-l-4 border-red-500 p-6">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          <h2 className="text-xl font-bold text-red-900">Constitutional Crisis Alert</h2>
        </div>
        <p className="text-red-800 leading-relaxed">
          The Osteen files document systematic constitutional violations, interstate conspiracy, and institutional 
          misconduct involving the false arrest and prolonged detention of investigative journalist Matthew Oliver Reardon.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-gray-900">Case Overview</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Victim:</strong> Matthew Oliver Reardon, investigative journalist</li>
            <li><strong>Primary Violator:</strong> Officer William Osteen, Galveston PD</li>
            <li><strong>Detention Period:</strong> 9 months on fabricated charges</li>
            <li><strong>Final Outcome:</strong> All charges dismissed</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-3">
            <Scale className="w-5 h-5 text-red-600" />
            <h3 className="font-bold text-gray-900">Key Violations</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• First Amendment retaliation</li>
            <li>• Fourth Amendment false arrest</li>
            <li>• Due process violations</li>
            <li>• Brady evidence suppression</li>
            <li>• Interstate conspiracy (42 USC § 1985)</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-3">
            <Gavel className="w-5 h-5 text-purple-600" />
            <h3 className="font-bold text-gray-900">Legal Status</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Federal Case:</strong> 3:2025cv00203 (S.D. Tex.)</li>
            <li><strong>Claims:</strong> 42 USC § 1983, § 1985</li>
            <li><strong>Pending:</strong> Franks Hearing Motion</li>
            <li><strong>Seeking:</strong> Constitutional relief & damages</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderBadActors = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 text-white rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Bad Actors: The Album</h2>
        <p className="text-purple-100 mb-6">
          The musical documentation of systemic injustice by Matthew Reardon. This unapologetic debut from 
          Outlawed Productions fuses gritty hip-hop, searing rock, and hard-hitting protest ballads, 
          pulling back the curtain on abuse, corruption, and the relentless fight for truth.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-bold text-white mb-3">Album Themes</h3>
            <ul className="space-y-2 text-purple-100 text-sm">
              <li>• Systemic corruption in law enforcement</li>
              <li>• First Amendment suppression</li>
              <li>• Constitutional violations documented</li>
              <li>• Interstate conspiracy narratives</li>
              <li>• Institutional accountability</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 className="font-bold text-white mb-3">Musical Styles</h3>
            <ul className="space-y-2 text-purple-100 text-sm">
              <li>• Gritty Hip-Hop</li>
              <li>• Protest Rock</li>
              <li>• Hard-hitting Ballads</li>
              <li>• Spoken Word Elements</li>
              <li>• Documentary Storytelling</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Experience the Full Album</h3>
        <p className="text-gray-700 mb-6">
          Listen to the complete "Bad Actors" album that chronicles the same systemic injustices 
          documented in the Osteen Files. Each track represents a different aspect of the constitutional 
          violations and institutional misconduct detailed in this legal documentation.
        </p>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-blue-900 mb-2">Direct Album Access</h4>
          <p className="text-blue-800 text-sm mb-3">
            Stream the complete album with full interactive player functionality:
          </p>
          <a 
            href="https://www.wtpnews.org/bad-actors" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            <Eye className="w-4 h-4" />
            Listen to Bad Actors Album
          </a>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-900 mb-2">Constitutional Connection:</h4>
          <p className="text-red-800 text-sm">
            This album represents the artistic expression that constitutional violators sought to suppress 
            through systematic targeting, false arrests, and prolonged detention. The musical documentation 
            parallels the legal evidence, creating a comprehensive record of both the violations and their human impact.
          </p>
        </div>
      </div>
    </div>
  );

  const renderEvidence = () => (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Forensic Evidence Database</h2>
      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-900">Body Camera Evidence (Exhibits E & F)</h3>
          <p className="text-gray-700">Immediate targeting and coordination documented</p>
          <div className="mt-2 bg-blue-50 p-3 rounded">
            <p className="text-sm"><strong>02:48</strong> - "You an auditor man?" - Immediate targeting</p>
            <p className="text-sm"><strong>03:04</strong> - "this is an auditor" - Institutional knowledge</p>
            <p className="text-sm"><strong>07:56-07:59</strong> - Pre-planned arrest discussion</p>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-red-900">UTMB Toxicology Reports</h3>
          <p className="text-gray-700">Blood Alcohol Content: 0.000% - Contradicts arrest justification</p>
          <div className="mt-2 bg-red-50 p-3 rounded">
            <p className="text-sm">Zero alcohol content proves Officer Osteen's sworn affidavit contained false statements</p>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold text-purple-900">Interstate Coordination Records</h3>
          <p className="text-gray-700">Phone calls between Texas and Mississippi officers during booking</p>
          <div className="mt-2 bg-purple-50 p-3 rounded">
            <p className="text-sm">Deputy Kandis Beavers provided false DWI records for felony enhancement</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderViolations = () => (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
      <h2 className="text-xl font-bold text-red-900 mb-4">Constitutional Rights Violations Analysis</h2>
      <div className="space-y-4">
        <div className="bg-white border border-red-200 rounded-lg p-4">
          <h3 className="font-bold text-red-900">First Amendment - Retaliation Against Protected Speech</h3>
          <p className="text-gray-700 mb-2">Immediate targeting as 'auditor' and 9-day timeline from exposé publication</p>
          <div className="bg-red-50 p-3 rounded">
            <p className="text-sm text-red-800"><strong>Case Law:</strong> Turner v. Driver (5th Cir. 2017), Lozman v. Riviera Beach (2018)</p>
          </div>
        </div>
        <div className="bg-white border border-red-200 rounded-lg p-4">
          <h3 className="font-bold text-red-900">Fourth Amendment - Unlawful Seizure & Fabricated Probable Cause</h3>
          <p className="text-gray-700 mb-2">False warrant affidavit contradicted by zero alcohol toxicology</p>
          <div className="bg-red-50 p-3 rounded">
            <p className="text-sm text-red-800"><strong>Case Law:</strong> Missouri v. McNeely (2013), Franks v. Delaware (1978)</p>
          </div>
        </div>
        <div className="bg-white border border-red-200 rounded-lg p-4">
          <h3 className="font-bold text-red-900">Fourteenth Amendment - Due Process Violations</h3>
          <p className="text-gray-700 mb-2">Nine months imprisonment based on demonstrably false evidence</p>
          <div className="bg-red-50 p-3 rounded">
            <p className="text-sm text-red-800"><strong>Case Law:</strong> County of Sacramento v. Lewis (1998)</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderConspiracy = () => (
    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
      <h2 className="text-xl font-bold text-purple-900 mb-4">Interstate Conspiracy Analysis (42 USC § 1985)</h2>
      <p className="text-purple-800 mb-6">
        Evidence demonstrates coordinated multi-jurisdictional operation spanning Texas and Mississippi 
        to suppress First Amendment journalism through systematic constitutional violations.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-purple-200 rounded-lg p-4">
          <h3 className="font-bold text-purple-900 mb-3">Conspiracy Elements</h3>
          <div className="space-y-2">
            <div className="bg-purple-50 p-2 rounded">
              <h4 className="font-semibold text-gray-800">Agreement</h4>
              <p className="text-sm text-gray-600">Recorded phone calls between Texas and Mississippi officers</p>
            </div>
            <div className="bg-purple-50 p-2 rounded">
              <h4 className="font-semibold text-gray-800">Deprivation of Rights</h4>
              <p className="text-sm text-gray-600">Systematic constitutional violations across multiple amendments</p>
            </div>
            <div className="bg-purple-50 p-2 rounded">
              <h4 className="font-semibold text-gray-800">Class-Based Targeting</h4>
              <p className="text-sm text-gray-600">Journalists and government critics specifically targeted</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-purple-200 rounded-lg p-4">
          <h3 className="font-bold text-purple-900 mb-3">Coordination Evidence</h3>
          <div className="space-y-2">
            <div className="bg-purple-50 p-2 rounded">
              <h4 className="font-semibold text-gray-800">Pre-Arrest</h4>
              <p className="text-sm text-gray-600">Mississippi officials provide false DWI records</p>
            </div>
            <div className="bg-purple-50 p-2 rounded">
              <h4 className="font-semibold text-gray-800">During Arrest</h4>
              <p className="text-sm text-gray-600">Real-time interstate communication during booking</p>
            </div>
            <div className="bg-purple-50 p-2 rounded">
              <h4 className="font-semibold text-gray-800">Post-Arrest</h4>
              <p className="text-sm text-gray-600">Continued coordination to maintain false felony status</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMisconduct = () => (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
      <h2 className="text-xl font-bold text-yellow-900 mb-4">Institutional Misconduct Patterns</h2>
      <div className="space-y-4">
        <div className="bg-white border border-yellow-200 rounded-lg p-4">
          <h3 className="font-bold text-yellow-900">Galveston Police Department</h3>
          <p className="text-gray-700 mb-2">Systematic targeting of First Amendment auditors and journalists</p>
          <div className="bg-yellow-50 p-3 rounded">
            <p className="text-sm text-yellow-800">Multiple federal lawsuits document pattern of constitutional violations</p>
          </div>
        </div>
        <div className="bg-white border border-yellow-200 rounded-lg p-4">
          <h3 className="font-bold text-yellow-900">Lafayette County, Mississippi</h3>
          <p className="text-gray-700 mb-2">Deputy Kandis Beavers' coordination and false information sharing</p>
          <div className="bg-yellow-50 p-3 rounded">
            <p className="text-sm text-yellow-800">Extended targeting spanning 2017-2025 for exposing government corruption</p>
          </div>
        </div>
      </div>
    </div>
  );

 const renderLitigation = () => (
  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
    <h2 className="text-xl font-bold text-blue-900 mb-4">Federal Civil Rights Litigation</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white border border-blue-200 rounded-lg p-4">
        <h3 className="font-bold text-blue-900 mb-3">Primary Federal Case</h3>
        <div className="space-y-1 text-sm">
          <p><strong>Case:</strong> Reardon v. Osteen et al</p>
          <p><strong>Number:</strong> Case No. 3:2025cv00203</p>
          <p><strong>Court:</strong> U.S. District Court, Southern District of Texas</p>
          <p><strong>Filed:</strong> May 27, 2025</p>
          <p><strong>Claims:</strong> 42 USC § 1983, § 1985</p>
          <p><strong>Status:</strong> Active litigation</p>
        </div>
      </div>
      
      <div className="bg-white border border-blue-200 rounded-lg p-4">
        <h3 className="font-bold text-blue-900 mb-3">Pending Motions</h3>
        <div className="bg-blue-50 p-3 rounded">
          <h4 className="font-semibold text-gray-800">Franks Hearing Motion</h4>
          <p className="text-sm text-gray-700">Filed February 25, 2025 - Challenging warrant validity based on false statements</p>
        </div>
      </div>
    </div>
    
    <div className="mt-6 bg-white border border-blue-200 rounded-lg p-4">
      <h3 className="font-bold text-blue-900 mb-3">Relief Sought</h3>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Compensatory Damages:</h4>
          <ul className="space-y-1 text-gray-700">
            <li>• Lost liberty (9 months detention)</li>
            <li>• Emotional distress and trauma</li>
            <li>• Legal fees and costs</li>
            <li>• Lost income and opportunities</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Equitable Relief:</h4>
          <ul className="space-y-1 text-gray-700">
            <li>• Injunctive relief preventing future targeting</li>
            <li>• Punitive damages for willful violations</li>
            <li>• Attorney fees under 42 USC § 1988</li>
            <li>• Declaratory judgment on constitutional violations</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

  // renderContent function that calls all the render functions
  const renderContent = () => {
    switch(activeSection) {
      case 'executive-summary': 
        return renderExecutiveSummary();
      case 'bad-actors': 
        return renderBadActors();
      case 'evidence': 
        return renderEvidence();
      case 'violations': 
        return renderViolations();
      case 'conspiracy': 
        return renderConspiracy();
      case 'misconduct': 
        return renderMisconduct();
      case 'litigation': 
        return renderLitigation();
      default: 
        return renderExecutiveSummary();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <Scale className="w-8 h-8 text-blue-400" />
            <h1 className="text-2xl font-bold">The Osteen Files</h1>
          </div>
          <p className="text-gray-300">Constitutional Violations & Interstate Conspiracy Legal Documentation System</p>
          <div className="flex items-center gap-4 mt-4 text-sm">
            <span className="bg-red-600 px-3 py-1 rounded">ACTIVE LITIGATION</span>
            <span className="bg-blue-600 px-3 py-1 rounded">FEDERAL CASE 3:2025cv00203</span>
            <span className="bg-purple-600 px-3 py-1 rounded">INTERSTATE CONSPIRACY</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar Navigation */}
          <div className="w-64 bg-white border border-gray-200 rounded-lg p-4 h-fit">
            <h3 className="font-bold text-gray-900 mb-4">Case Sections</h3>
            <nav className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded text-left transition-colors ${
                      activeSection === item.id 
                        ? 'bg-blue-100 text-blue-900 font-semibold' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded border border-yellow-200">
              <h4 className="font-bold text-yellow-900 mb-2">Case Status</h4>
              <div className="text-xs space-y-1">
                <p className="text-yellow-800">Charges: DISMISSED</p>
                <p className="text-yellow-800">Federal Case: ACTIVE</p>
                <p className="text-yellow-800">Franks Motion: PENDING</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OsteenFilesApp;