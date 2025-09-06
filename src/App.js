import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Search, FileText, Scale, AlertTriangle, Calendar, Users, Map, Gavel, Shield, Eye } from 'lucide-react';

const OsteenFilesApp = () => {
  const [activeSection, setActiveSection] = useState('executive-summary');
  const [expandedItems, setExpandedItems] = useState(new Set(['timeline']));
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvidence, setSelectedEvidence] = useState(null);

  const toggleExpand = (item) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(item)) {
      newExpanded.delete(item);
    } else {
      newExpanded.add(item);
    }
    setExpandedItems(newExpanded);
  };

  const evidenceDatabase = {
    bodyCam: {
      title: "Body Camera Evidence (Exhibits E & F)",
      type: "Video Evidence",
      significance: "Immediate targeting and coordination",
      keyTimestamps: [
        { time: "02:48", description: "'You an auditor man?' - Immediate targeting based on protected speech" },
        { time: "03:04-03:06", description: "'this is an auditor' - Demonstrates institutional knowledge and bias" },
        { time: "07:56-07:59", description: "Pre-planned arrest discussion between officers" },
        { time: "09:35-09:39", description: "Officer clarifies alcohol smell from vehicle, not breath" },
        { time: "10:30-12:10", description: "Clear breathalyzer requests captured on video" }
      ]
    },
    warrantAffidavit: {
      title: "Officer Osteen's False Warrant Affidavit",
      type: "Sworn Document",
      significance: "Perjury and false statements under oath",
      violations: [
        "Claimed 'moderate' alcohol breath odor when blood test showed zero alcohol",
        "Stated defendant 'refused to provide sample' contradicting body camera evidence",
        "Described 'heavy footed walking' without observation opportunity",
        "Changed testimony from 'dilated pupils' to 'pinpoint pupils'"
      ]
    },
    toxicology: {
      title: "UTMB Toxicology Reports",
      type: "Medical Evidence",
      significance: "Zero alcohol content proves false arrest",
      results: "Blood Alcohol Content: 0.000% - Completely contradicts arrest justification"
    },
    interstate: {
      title: "Interstate Coordination Records",
      type: "Communications Evidence",
      significance: "42 USC § 1985 conspiracy violations",
      communications: [
        "Recorded phone calls between Officer Osteen and Deputy Kandis Beavers",
        "False Mississippi DWI information sharing for felony enhancement",
        "Coordination during booking process captured on jail recordings"
      ]
    }
  };

  const timeline = [
    {
      date: "August 2, 2023",
      event: "Reardon releases video exposing Deputy Beavers' perjury",
      significance: "Establishes retaliatory motive - 9 days before arrest",
      type: "retaliation"
    },
    {
      date: "August 11, 2023 - 2:00 AM",
      event: "Traffic stop initiated as Reardon enters Galveston Island",
      significance: "Beginning of coordinated operation",
      type: "arrest"
    },
    {
      date: "August 11, 2023 - 2:01 AM",
      event: "Officer Osteen: 'You an auditor man?' - Immediate targeting",
      significance: "First Amendment violation evidence",
      type: "violation"
    },
    {
      date: "August 11, 2023 - 2:30-4:00 AM",
      event: "Forced blood draw at UTMB without valid warrant",
      significance: "Fourth Amendment violation - warrantless seizure",
      type: "violation"
    },
    {
      date: "August 11, 2023 - 4:00-6:00 AM",
      event: "Interstate coordination during booking",
      significance: "Evidence of conspiracy across state lines",
      type: "conspiracy"
    },
    {
      date: "August 2023 - May 2024",
      event: "Nine months detention on fabricated charges",
      significance: "Due process violations - prolonged detention on false evidence",
      type: "violation"
    },
    {
      date: "May 24, 2024",
      event: "All charges dismissed - prosecutors admit they 'couldn't prove the allegation'",
      significance: "Vindication and evidence of prosecutorial misconduct",
      type: "dismissal"
    },
    {
      date: "May 27, 2024",
      event: "Federal civil rights lawsuit filed (Case No. 3:2025cv00203)",
      significance: "Seeking accountability and constitutional relief",
      type: "litigation"
    },
    {
      date: "February 25, 2025",
      event: "Franks Hearing Motion filed challenging warrant validity",
      significance: "Formal challenge to false statements in warrant affidavit",
      type: "litigation"
    }
  ];

  const constitutionalViolations = [
    {
      amendment: "First Amendment",
      violation: "Retaliation Against Protected Speech",
      evidence: "Immediate targeting as 'auditor' and 9-day timeline from exposé publication",
      caselaw: "Turner v. Driver (5th Cir. 2017), Lozman v. Riviera Beach (2018)",
      severity: "Critical"
    },
    {
      amendment: "Fourth Amendment",
      violation: "Unlawful Seizure & Fabricated Probable Cause",
      evidence: "False warrant affidavit contradicted by zero alcohol toxicology",
      caselaw: "Missouri v. McNeely (2013), Franks v. Delaware (1978)",
      severity: "Critical"
    },
    {
      amendment: "Fourteenth Amendment",
      violation: "Due Process - Extended Detention on False Charges",
      evidence: "Nine months imprisonment based on demonstrably false evidence",
      caselaw: "County of Sacramento v. Lewis (1998), substantive due process",
      severity: "Critical"
    },
    {
      amendment: "Brady Violations",
      violation: "Suppression of Exculpatory Evidence",
      evidence: "Negative toxicology results withheld, prosecution used known perjury",
      caselaw: "Brady v. Maryland (1963), Giglio v. United States (1972)",
      severity: "Critical"
    }
  ];

  const navigationItems = [
    { id: 'executive-summary', label: 'Executive Summary', icon: FileText },
    { id: 'timeline', label: 'Timeline Analysis', icon: Calendar },
    { id: 'evidence', label: 'Evidence Database', icon: Search },
    { id: 'violations', label: 'Constitutional Violations', icon: Scale },
    { id: 'conspiracy', label: 'Interstate Conspiracy', icon: Users },
    { id: 'misconduct', label: 'Institutional Misconduct', icon: AlertTriangle },
    { id: 'litigation', label: 'Federal Litigation', icon: Gavel }
  ];

  const renderTimelineItem = (item, index) => {
    const getTypeColor = (type) => {
      switch(type) {
        case 'violation': return 'border-red-500 bg-red-50';
        case 'conspiracy': return 'border-purple-500 bg-purple-50';
        case 'retaliation': return 'border-orange-500 bg-orange-50';
        case 'arrest': return 'border-gray-500 bg-gray-50';
        case 'dismissal': return 'border-green-500 bg-green-50';
        case 'litigation': return 'border-blue-500 bg-blue-50';
        default: return 'border-gray-300 bg-white';
      }
    };

    return (
      <div key={index} className={`border-l-4 pl-4 pb-6 ${getTypeColor(item.type)}`}>
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="w-4 h-4 text-gray-600" />
          <span className="font-bold text-gray-800">{item.date}</span>
        </div>
        <h4 className="font-semibold text-gray-900 mb-1">{item.event}</h4>
        <p className="text-sm text-gray-700 italic">{item.significance}</p>
      </div>
    );
  };

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
          Evidence reveals a coordinated multi-jurisdictional operation designed to silence First Amendment journalism 
          through fabricated charges, perjured testimony, and interstate law enforcement conspiracy.
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

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-bold text-blue-900 mb-3">Critical Evidence Summary</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">Smoking Gun Evidence:</h4>
            <ul className="space-y-1 text-sm text-blue-700">
              <li>• Officer Osteen's "You an auditor man?" targeting (body cam)</li>
              <li>• Zero alcohol toxicology contradicting sworn affidavit</li>
              <li>• Recorded interstate coordination calls</li>
              <li>• False Mississippi DWI records for felony enhancement</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">Pattern Evidence:</h4>
            <ul className="space-y-1 text-sm text-blue-700">
              <li>• 9-day retaliation timeline from exposé publication</li>
              <li>• Systematic targeting of First Amendment auditors</li>
              <li>• Multi-agency coordination spanning 2017-2025</li>
              <li>• Prosecutorial admission of unprovable allegations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEvidence = () => (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Forensic Evidence Database</h2>
        <div className="grid gap-6">
          {Object.entries(evidenceDatabase).map(([key, evidence]) => (
            <div key={key} className="border border-gray-200 rounded-lg p-4">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleExpand(key)}
              >
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-blue-600" />
                  <div>
                    <h3 className="font-bold text-gray-900">{evidence.title}</h3>
                    <p className="text-sm text-gray-600">{evidence.type} - {evidence.significance}</p>
                  </div>
                </div>
                {expandedItems.has(key) ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </div>
              
              {expandedItems.has(key) && (
                <div className="mt-4 pl-8 space-y-3">
                  {evidence.keyTimestamps && (
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Key Timestamps:</h4>
                      {evidence.keyTimestamps.map((ts, idx) => (
                        <div key={idx} className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                          <span className="font-mono text-sm font-bold text-blue-700">{ts.time}</span>
                          <p className="text-sm text-gray-700 mt-1">{ts.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {evidence.violations && (
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Documented False Statements:</h4>
                      {evidence.violations.map((violation, idx) => (
                        <div key={idx} className="bg-red-50 p-3 rounded border-l-4 border-red-500 mb-2">
                          <p className="text-sm text-red-800">{violation}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {evidence.results && (
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-800 mb-1">Exculpatory Results:</h4>
                      <p className="text-sm text-green-700">{evidence.results}</p>
                    </div>
                  )}
                  
                  {evidence.communications && (
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Interstate Coordination Evidence:</h4>
                      {evidence.communications.map((comm, idx) => (
                        <div key={idx} className="bg-purple-50 p-3 rounded border-l-4 border-purple-500 mb-2">
                          <p className="text-sm text-purple-800">{comm}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderViolations = () => (
    <div className="space-y-6">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-red-900 mb-4">Constitutional Rights Violations Analysis</h2>
        <p className="text-red-800 mb-6">
          This case demonstrates systematic violations across multiple constitutional amendments, 
          establishing clear federal civil rights claims under 42 USC § 1983 and interstate conspiracy under § 1985.
        </p>
        
        <div className="space-y-4">
          {constitutionalViolations.map((violation, index) => (
            <div key={index} className="bg-white border border-red-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  <h3 className="font-bold text-red-900">{violation.amendment}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  violation.severity === 'Critical' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {violation.severity}
                </span>
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-2">{violation.violation}</h4>
              <p className="text-gray-700 mb-3">{violation.evidence}</p>
              
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-semibold text-gray-800 mb-1">Supporting Case Law:</h5>
                <p className="text-sm text-gray-700 font-mono">{violation.caselaw}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderConspiracy = () => (
    <div className="space-y-6">
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-purple-900 mb-4">Interstate Conspiracy Analysis</h2>
        <p className="text-purple-800 mb-6">
          Evidence demonstrates coordinated multi-jurisdictional operation spanning Texas and Mississippi 
          to suppress First Amendment journalism through systematic constitutional violations.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-purple-200 rounded-lg p-4">
            <h3 className="font-bold text-purple-900 mb-3">42 USC § 1985 Elements</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Agreement</h4>
                  <p className="text-sm text-gray-600">Recorded phone calls between Texas and Mississippi officers</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Deprivation of Rights</h4>
                  <p className="text-sm text-gray-600">Systematic constitutional violations across multiple amendments</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Class-Based Targeting</h4>
                  <p className="text-sm text-gray-600">Journalists and government critics specifically targeted</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Overt Acts</h4>
                  <p className="text-sm text-gray-600">False arrest, perjury, extended detention, evidence fabrication</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-purple-200 rounded-lg p-4">
            <h3 className="font-bold text-purple-900 mb-3">Coordination Timeline</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-purple-50 p-3 rounded">
                <h4 className="font-semibold">Pre-Arrest Coordination</h4>
                <p className="text-gray-700">Mississippi officials provide false DWI records for felony enhancement</p>
              </div>
              <div className="bg-purple-50 p-3 rounded">
                <h4 className="font-semibold">During Arrest</h4>
                <p className="text-gray-700">Real-time interstate communication during booking process</p>
              </div>
              <div className="bg-purple-50 p-3 rounded">
                <h4 className="font-semibold">Post-Arrest</h4>
                <p className="text-gray-700">Continued coordination to maintain false felony status</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMisconduct = () => (
    <div className="space-y-6">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-yellow-900 mb-4">Institutional Misconduct Patterns</h2>
        
        <div className="grid gap-6">
          <div className="bg-white border border-yellow-200 rounded-lg p-4">
            <h3 className="font-bold text-yellow-900 mb-3">Galveston Police Department</h3>
            <div className="space-y-3">
              <div className="bg-yellow-50 p-3 rounded">
                <h4 className="font-semibold text-gray-800">Systematic First Amendment Targeting</h4>
                <p className="text-sm text-gray-700">Multiple federal lawsuits document pattern of constitutional violations against journalists and auditors</p>
              </div>
              <div className="bg-yellow-50 p-3 rounded">
                <h4 className="font-semibold text-gray-800">Institutional Knowledge</h4>
                <p className="text-sm text-gray-700">Officers maintain "dossiers of First Amendment activists" and develop "false narratives to arrest"</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-yellow-200 rounded-lg p-4">
            <h3 className="font-bold text-yellow-900 mb-3">Lafayette County, Mississippi</h3>
            <div className="space-y-3">
              <div className="bg-yellow-50 p-3 rounded">
                <h4 className="font-semibold text-gray-800">Deputy Kandis Beavers' Role</h4>
                <p className="text-sm text-gray-700">Provided false information about prior DWI convictions to enhance charges</p>
              </div>
              <div className="bg-yellow-50 p-3 rounded">
                <h4 className="font-semibold text-gray-800">Extended Targeting (2017-2025)</h4>
                <p className="text-sm text-gray-700">Systematic retaliation for exposing government corruption</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-yellow-200 rounded-lg p-4">
            <h3 className="font-bold text-yellow-900 mb-3">UTMB Medical Complicity</h3>
            <div className="space-y-3">
              <div className="bg-yellow-50 p-3 rounded">
                <h4 className="font-semibold text-gray-800">Forced Medical Procedures</h4>
                <p className="text-sm text-gray-700">Invasive blood draws on handcuffed, non-consenting patient without valid warrant</p>
              </div>
              <div className="bg-yellow-50 p-3 rounded">
                <h4 className="font-semibold text-gray-800">Intentional Harm</h4>
                <p className="text-sm text-gray-700">Evidence suggests deliberate infliction of pain as part of punitive process</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLitigation = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Federal Civil Rights Litigation</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-3">Primary Federal Case</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Case:</strong> Reardon v. Osteen et al</p>
              <p><strong>Number:</strong> Case No. 3:2025cv00203</p>
              <p><strong>Court:</strong> U.S. District Court, Southern District of Texas</p>
              <p><strong>Filed:</strong> May 27, 2024</p>
              <p><strong>Claims:</strong> 42 USC § 1983, § 1985</p>
            </div>
          </div>
          
          <div className="bg-white border border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-blue-900 mb-3">Pending Motions</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded">
                <h4 className="font-semibold text-gray-800">Franks Hearing Motion</h4>
                <p className="text-sm text-gray-700">Filed February 25, 2025 - Challenging warrant validity based on false statements</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-white border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-900 mb-3">Relief Sought</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Compensatory Damages:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Lost liberty (9 months detention)</li>
                <li>• Emotional distress</li>
                <li>• Legal fees and costs</li>
                <li>• Lost income and opportunities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Equitable Relief:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Injunctive relief preventing future targeting</li>
                <li>• Punitive damages for willful violations</li>
                <li>• Attorney fees under 42 USC § 1988</li>
                <li>• Declaratory judgment on constitutional violations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'executive-summary': return renderExecutiveSummary();
      case 'timeline': return (
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Chronological Analysis of Constitutional Violations</h2>
          <div className="space-y-4">
            {timeline.map((item, index) => renderTimelineItem(item, index))}
          </div>
        </div>
      );
      case 'evidence': return renderEvidence();
      case 'violations': return renderViolations();
      case 'conspiracy': return renderConspiracy();
      case 'misconduct': return renderMisconduct();
      case 'bad-actors': return renderBadActors();
      case 'litigation': return renderLitigation();
      default: return renderExecutiveSummary();
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