import type { StudyDomain } from './studyTypes';

// LCPAA study guide, Part A: Domains 1-3.
// Source: Texas HHSC Child Care Regulation, Minimum Standards for Child-Placing Agencies (26 TAC Chapter 749), revised 8/2026.
export const lcpaaDomainsPartA: StudyDomain[] = [
  {
    id: 'lcpaa-domain-1',
    number: 1,
    title: 'Regulatory Framework & Agency Administration',
    icon: 'ri-book-open-line',
    summary: `The foundation of the LCPAA exam: what Chapter 749 governs, which services a child-placing agency may offer, the plans and policies you must have, and the notification deadlines, insurance, and office rules that keep your permit in good standing.`,
    sections: [
      {
        heading: `What Chapter 749 Governs and Who Is Responsible`,
        body: `Chapter 749 sets out the minimum standards that apply to child-placing agencies (CPAs). The purpose of the chapter is simply to set forth the rules that apply to child-placing agencies (§749.1).\n\nThe permit holder, meaning the owner of the agency that is granted the permit, must ensure compliance with all rules of the chapter at all times (§749.3, High weight). The only exception is for rules tied to specific services your agency does not offer. For example, an agency permitted for adoption services only does not have to follow the foster care rules, but it must follow every other rule.\n\nIn the chapter, "you" means the applicant or permit holder, and "Licensing" means the Child Care Licensing Department of HHSC (§749.41). "Days" means calendar days unless the rule says otherwise (§749.43).\n\nHow the standards are enforced:\n• A deficiency is any failure to comply with a minimum standard, a rule in Chapter 745, the law, a specific term of the permit, or a specific condition of probation or suspension.\n• Every citable standard carries one of five weights: high, medium-high, medium, medium-low, or low. The weight reflects the risk to children and does not change with the scope or severity of an actual deficiency.\n• Deficiencies are discussed with the person in charge at the inspection, and you are given a specified period to correct them.\n• If you disagree with a decision, you may request an administrative review. You may request an appeal hearing (conducted by SOAH) on a denial, revocation, suspension, or refusal to renew a permit.\n• You may request a waiver if you cannot comply for economic reasons, or a variance if you want to meet the intent of a standard in a different way.`,
      },
      {
        heading: `Services a CPA May Provide`,
        body: `Licensing regulates three categories of service (§749.61):\n• Child-care services: meeting a child's basic needs for shelter, nutrition, clothing, nurture, socialization, personal health and hygiene, supervision, education, and service planning.\n• Treatment services: specialized child-care services for children with emotional disorders, intellectual disability, autism spectrum disorder, primary medical needs, or who are trafficking victims.\n• Additional programmatic services: a transitional living program, an assessment services program, and respite child-care services.\n\nYou may provide each type of service only if your permit lists the type of service you are approved to provide, and your operational policies ensure that children are admitted appropriately, their needs are met, they are appropriately supervised (High weight), they are protected from one another when appropriate, and you meet the applicable rules (§749.63).\n\nTransitional living and independent living have specific age rules:\n• A child must be 14 years old or older to participate in a transitional living program (§749.65).\n• To receive the level of caregiver supervision described in §749.2597, the child must be 16 years old or older (§749.65).\n• A transitional living program must train children to demonstrate competency in health, general safety and fire safety; money management; transportation skills; and accessing community resources (§749.67).\n• An independent living program provides case management to a child living without supervision and without a constant on-site caregiver. Your agency may not provide an independent living program for a child in care under 18 years old (§749.71).`,
      },
      {
        heading: `Plans and Policies Required for Licensing Approval`,
        body: `During the application process you submit plans and policies to Licensing for approval. The plans (§749.101) are:\n• An operation plan: the location and telephone numbers of all offices including branches, hours of operation, and the governing body members and titles.\n• A fiscal plan: a detailed estimate of operating costs for the first three months, documentation of reserve funds or available credit at least equal to those three months, an estimated 12-month budget, and predictable funds sufficient for the first year.\n• A plan to evaluate how well your system meets the rules, including the accuracy of foster home screenings and the comprehensiveness of supervisory visits. It must describe how you identify problems, correct them, and document when and how they were corrected.\n• A plan to investigate reports of minimum standards violations upon Licensing's request and submit your investigative findings to Licensing within 30 days.\n\nThe long list of policies in §749.103(b) includes record keeping, personnel, conflict of interest, admission, placement, child-care, discipline, foster care, volunteers, abuse and neglect, a tobacco and e-cigarette policy, a suicide prevention policy, and (High weight) a weapons, firearms, explosive materials, and projectiles policy.\n\nPolicy mechanics matter on the exam. Plans and policies must show their adoption and effective dates. A sole proprietor signs and dates them, each partner of a partnership signs and dates them, and a corporation's governing body takes written action to adopt them (§749.139). All employees and caregivers must be aware of and follow your policies (§749.138). Licensing enforces only the plans and policies the minimum standards require (§749.141).`,
      },
      {
        heading: `Personnel and Conflict of Interest Policies`,
        body: `Two policy sections are heavily tested because they protect children and the integrity of the agency.\n\nPersonnel policies (§749.105) must include:\n• An organizational chart showing administrative, professional, and staffing structures and lines of authority.\n• Written job descriptions with minimum qualifications and responsibilities for each position.\n• A written professional staffing plan showing that the number, qualifications, and responsibilities of professional positions (including the administrator) fit the size and scope of services, with full-time, part-time, or consultative status described for each position.\n• Written training requirements for employees and caregivers.\n• Compliance with the background check requirements of Chapter 745, Subchapter F (High weight).\n• A requirement that employees report serious incidents and suspected abuse, neglect, or exploitation directly to the Texas Abuse and Neglect Hotline. An employee may not delegate that report, and you may not require an employee to seek approval to file a report or to notify you that a report was made (High weight).\n• Written notice of the duty to maintain child confidentiality, and either the model drug testing policy or an equivalent written policy.\n\nConflict of interest policies (§749.107) must state that placement staff will not conduct, review, or approve screenings or post-placement reports where there is a conflict or bias, and that it is a conflict for the agency to verify or approve as foster or adoptive parents any current owner, governing body member, executive director, employee, or contract service provider (or their relatives). For corporations, the majority of the voting members of the governing body must be free of conflicts that could interfere with objective decision making.`,
      },
      {
        heading: `Operational Duties, Notification Deadlines, and Insurance`,
        body: `While operating you must (§749.151) have a designated full-time administrator who meets the qualifications in §749.631 (High weight), operate according to approved plans and policies, keep current, true, accurate, and complete records, allow Licensing to inspect the agency during its hours of operation, and allow Licensing to inspect or monitor any foster home at any time.\n\nWritten notice to your Licensing Representative is due on a tight schedule (§749.153):\n• As soon as possible, but at least 30 days before you change your legal structure or governing body, move the agency, open a branch office, or change the hours of the agency or a branch office.\n• As soon as possible, but at least 15 days before you change the evaluation or investigation plans in §749.101(3) and (4), or the policies required by §749.103(b).\n• As soon as possible, but no later than two days after you change administrators or the position becomes vacant (Medium-High), or after a controlling person is added or leaves (Medium-High).\n• You must also report to the Texas Abuse and Neglect Hotline as soon as you learn of foster or adoptive placements that appear to have been made by someone other than the child's parents or a CPA.\n\nIf your administrator position becomes vacant and you have no back-up administrator, you have 60 days from the vacancy to obtain a licensed administrator before Licensing can cite you (§749.154).\n\nInsurance: maintain liability insurance of $300,000 for each occurrence of negligence covering injury to a child on your premises or in your care, and give Licensing proof of coverage each year by the anniversary of your permit issuance (§749.155). Acceptable reasons for lacking coverage are financial reasons, no underwriter willing to issue a policy, or exhausted policy limits, and you must notify Licensing in writing by the anniversary date (§749.157). If you do not carry the insurance, notify each child's parent in writing before admission, or within 14 days after you stop carrying it (§749.159).`,
      },
      {
        heading: `Fiscal Rules, Branch Offices, Clients, and Appeals`,
        body: `Fiscal basics (§749.161): keep the agency on a sound fiscal basis, pay employees timely and pay foster parents per your agreement, and account for a child's money separately from agency and foster home funds. Return a child's money within 30 days of discharge. Make available either an annual review by an independent CPA or proof of reserve funds equal to at least three months of operating expenses. Agencies providing adoption services file an annual financial report within 60 days of the end of the fiscal year (§749.191) and may not pay for adoption referrals (§749.193).\n\nBranch offices:\n• A branch office is anywhere child placement staff and child or home master records are located (§749.301).\n• At least 30 days before opening one, submit the address, office hours, responsible staff, and an updated staffing plan with your request to amend the license (§749.303).\n• You must have a main or branch office in each department region where you verify homes, or within 150 miles of each verified foster home (§749.304).\n• Each office needs its own administrator (and treatment director, if applicable), unless offices stay within caseload limits: for foster children only, 35 for child-care services, 25 for treatment services, or 30 combined; for foster homes only, 15 homes; for a combined caseload of children and homes, 30 cases, counting each child and each home as one case (§749.305).\n\nClients and appeals: adult clients must be told in writing that the rules, compliance reports, and your policies are available, of their right to appeal, and how to complain to Licensing (§749.423). You must have a written appeal process, and an internal review is sufficient (§749.425).`,
      },
    ],
    scenarios: [
      {
        id: 'pd1s1',
        title: `The Administrator Who Walked Out`,
        situation: `You are the owner of a licensed child-placing agency. On Friday afternoon your only licensed administrator gives notice and leaves immediately. The agency has no back-up administrator, and there are 18 children in foster homes under your supervision.`,
        question: `What must you do about Licensing, and how long do you have to fill the position?`,
        discussion: `Two separate clocks apply. First, the notification clock: you must notify your Licensing Representative in writing as soon as possible, but no later than two days after your administrator position becomes vacant (§749.153(a)(3)(A), Medium-High weight). Second, the staffing clock: because you have no back-up administrator, you have 60 days from the date of the vacancy to obtain a licensed administrator before Licensing can cite you for not having one (§749.154). The new person must meet §749.631: licensed as a Child-Placing Agency Administrator under Chapter 43 of the Human Resources Code and Chapter 745, Subchapter N, a full-time employee, and present at a Texas office. The 60 days does not suspend your other duties: the permit holder must still ensure compliance with all rules at all times (§749.3), and the administrator functions in §749.635 still need to be covered.`,
        keyTakeaway: `Notify Licensing within two days of an administrator change or vacancy, and with no back-up administrator you have 60 days to fill the position.`,
      },
      {
        id: 'pd1s2',
        title: `Opening a Branch Office Next Month`,
        situation: `Your agency wants to open a branch office across the state to recruit foster homes. You also plan to shorten the main office hours at the same time. You hope to open in three weeks, and you would like the main-office administrator to oversee both locations.`,
        question: `What notice do you owe Licensing, and can one administrator cover both offices?`,
        discussion: `Opening a branch office and changing office hours both require written notification to your Licensing Representative as soon as possible, but at least 30 days beforehand (§749.153(a)(1)(C) and (D)). The branch office request to amend your license, with the address, hours, responsible administrative staff, child placement management staff, other child-placing staff, and an updated professional staffing plan, is also due at least 30 days before opening (§749.303). A three-week timeline does not work. Licensing does not automatically approve the action when you give notice, so additional steps may be needed. A single administrator and treatment director may serve both offices only if the offices stay within the caseload limits in §749.305(a)(2): for foster children only, 35 (child-care services), 25 (treatment services), or 30 combined; for homes only, 15 homes; and for combined caseloads, 30 cases. Otherwise each office needs a separate qualified administrator. You must also keep a main or branch office within 150 miles of each verified home or in each region where you verify homes (§749.304).`,
        keyTakeaway: `Give Licensing at least 30 days notice for a branch office or hours change, and share an administrator only within the §749.305 caseload limits.`,
      },
    ],
    quiz: [
      {
        id: 'pd1q1',
        question: `Who must ensure compliance with all rules of Chapter 749 at all times?`,
        options: [
          `The child-placing agency administrator only`,
          `The permit holder`,
          `The child placement management staff`,
          `The foster parents`,
        ],
        correct: 1,
        explanation: `§749.3 states that the permit holder must ensure compliance with all rules of the chapter at all times (High weight), except rules for services the agency does not offer.`,
      },
      {
        id: 'pd1q2',
        question: `How soon after your child-placing agency administrator position becomes vacant must you notify Licensing?`,
        options: [
          `As soon as possible, but no later than two days`,
          `At least 15 days before the vacancy`,
          `Within 30 days`,
          `Within 60 days`,
        ],
        correct: 0,
        explanation: `§749.153(a)(3)(A) requires written notice as soon as possible, but no later than two days after you change administrators or the position becomes vacant. The 60-day period in §749.154 is the time allowed to fill the position when there is no back-up administrator.`,
      },
      {
        id: 'pd1q3',
        question: `What is the minimum liability insurance coverage required for a child-placing agency?`,
        options: [
          `$100,000 per year`,
          `$500,000 per occurrence`,
          `$300,000 for each occurrence of negligence`,
          `$1,000,000 aggregate`,
        ],
        correct: 2,
        explanation: `§749.155 requires liability insurance of $300,000 for each occurrence of negligence covering injury to a child on your premises or in your care, with proof provided to Licensing each year by the anniversary date of permit issuance.`,
      },
      {
        id: 'pd1q4',
        question: `How long before opening a branch office must you notify Licensing and submit the information with your request to amend your license?`,
        options: [
          `At least 2 days`,
          `At least 15 days`,
          `At least 14 days`,
          `At least 30 days`,
        ],
        correct: 3,
        explanation: `Both §749.153(a)(1)(C) and §749.303 require at least 30 days before the branch office opens.`,
      },
      {
        id: 'pd1q5',
        question: `With no back-up administrator, how long do you have after the administrator position becomes vacant to obtain a licensed administrator before Licensing can cite you?`,
        options: [
          `60 days`,
          `30 days`,
          `90 days`,
          `Two days`,
        ],
        correct: 0,
        explanation: `§749.154 gives you 60 days from the date the position becomes vacant to obtain a licensed child-care administrator before Licensing can cite you for not having an administrator.`,
      },
      {
        id: 'pd1q6',
        question: `What is the minimum age for a child to be eligible to participate in a transitional living program?`,
        options: [
          `12`,
          `18`,
          `16`,
          `14`,
        ],
        correct: 3,
        explanation: `§749.65(a) requires the child to be 14 years old or older. Age 16 is the threshold for the level of caregiver supervision described in §749.2597 (§749.65(b)).`,
      },
      {
        id: 'pd1q7',
        question: `Which office-location rule applies to your foster homes under §749.304?`,
        options: [
          `A main or branch office in each department region where you verify homes, or within 150 miles of each verified foster home`,
          `A main office within 25 miles of every foster home`,
          `A branch office in every county where a home is verified`,
          `One main office anywhere in Texas, with no distance requirement`,
        ],
        correct: 0,
        explanation: `§749.304 requires either a main or branch office in each department region where you verify homes, or within 150 miles of each verified foster home (measured in radial miles per the technical assistance).`,
      },
      {
        id: 'pd1q8',
        question: `Your agency previously carried liability insurance but has stopped carrying it. By when must you notify the parent of each child in your care in writing?`,
        options: [
          `Before the next anniversary of your permit`,
          `Within 14 days after you stop carrying it`,
          `Within 2 days`,
          `Within 60 days`,
        ],
        correct: 1,
        explanation: `§749.159(b) requires written notice to the parent of each child in your care within 14 days after you stop carrying the insurance. Separately, §749.157(b) requires written notice to Licensing by the permit anniversary date.`,
      },
    ],
  },
  {
    id: 'lcpaa-domain-2',
    number: 2,
    title: `Reports, Records & Serious Incidents`,
    icon: 'ri-file-list-3-line',
    summary: `Subchapter D in practice: which serious incidents must be reported and how fast, how to document them, how long each kind of record is kept, who may see or release a child's record, and what to do when a child has an unauthorized absence.`,
    sections: [
      {
        heading: `Serious Incident Basics and the Reporting Route`,
        body: `A serious incident is a non-routine occurrence that has or may have dangerous or significant consequences for the care, supervision, or treatment of a child (§749.501). The types of serious incidents are listed in §749.503.\n\nHow reports are made:\n• All serious incident reports must be made directly to the Texas Abuse and Neglect Hotline (§749.509(a)).\n• Foster parents must report serious incidents directly to the Hotline when the incident involves a child under their care (§749.509(b)).\n• The reports go to Child Care Regulation, and in some cases to parents and law enforcement, within the time frames in §749.503.\n\nTwo definitions to know cold:\n• A suicide attempt is an attempt to take one's own life, including any act intended to cause death, but excluding suicidal gestures where it is clear the act was unlikely to cause death. Suicidal thoughts are not reportable as a suicide attempt (§749.505).\n• An unauthorized absence is when a child is absent from a foster home without permission from the foster parent or other temporary caregiver and cannot be located, including when an unauthorized person removes the child (§749.501). Agencies use their best judgment based on the totality of the circumstances.\n\nNot every hospital visit is reportable. Only a substantial physical injury or critical illness that a reasonable person would conclude needs treatment by a medical professional or hospitalization qualifies. The nature of the injury, not where it is treated, controls: stitches at a doctor's office are reportable, while a flu visit to the emergency room is not (technical assistance to §749.503).`,
      },
      {
        heading: `Reporting Timelines You Should Know`,
        body: `§749.503 sets timelines in a table by incident type. Learn these clear anchors (reports to Child Care Regulation unless noted):\n\nIncidents involving a child in care:\n• Child death: Child Care Regulation and parents, as soon as possible but no later than 2 hours after the death; law enforcement, immediately but no later than 1 hour after the death.\n• Substantial physical injury or critical illness: as soon as possible, but no later than 24 hours after the incident. Parents are told immediately after ensuring the child's safety. Law enforcement is not notified.\n• Allegations of abuse, neglect, or exploitation (or any incident indicating a child may have been abused, neglected, or exploited): as soon as the CPA becomes aware, including whether the CPA plans to move the child until the investigation is complete. Parents are told the same thing immediately after ensuring the child's safety. Law enforcement is not notified under the table.\n• Physical abuse or sexual abuse committed by a child against another child, and suicide attempts: as soon as the CPA becomes aware. Parents are told immediately after ensuring the child's safety. Law enforcement is not notified.\n• A child indicted, charged, or arrested, or law enforcement responding to an incident at the foster home that could lead to charges against the child: no later than 24 hours after the CPA becomes aware; parents as soon as the CPA becomes aware. Law enforcement is not notified.\n• A child issued a ticket at school by law enforcement (or other citation without detention): parents only, as soon as possible but no later than 24 hours after the CPA becomes aware. Child Care Regulation and law enforcement are not notified.\n• A reportable communicable disease: Child Care Regulation no later than 24 hours after the CPA becomes aware (unless the information is confidential). Parents are told, within the same 24 hours, only if their child contracted the disease or was exposed to it. Law enforcement is not notified.\n• Unauthorized absence of a child 13 or older: Child Care Regulation, parents, and law enforcement no later than 6 hours from discovery if the child is still missing, but immediately if the child was previously alleged or determined to be a trafficking victim or the CPA believes the child was abducted or will not return.\n• Unauthorized absence of a child under 6: law enforcement immediately upon determining the child is not on the premises and is still missing; Child Care Regulation and parents within 2 hours of notifying law enforcement.\n• Unauthorized absence of a child 6 to 12 who is still missing: law enforcement and parents within 2 hours of determining the child is not on the premises; Child Care Regulation within 2 hours of notifying law enforcement.\n• If a child returns before the required reporting timeframe for an absence, you do not report it as a serious incident but must document it within 24 hours after becoming aware of it (§749.503(c)).\n\nIncidents involving the CPA, a foster home, or personnel (§749.503(e)):\n• Fire, flood, or other incident making part of the CPA unsafe or unsanitary, or a disaster requiring a foster home to close: no later than 24 hours, with parents notified in the same window.\n• Moving the CPA or a foster home, or caring for children at a location not on the permit or verification, under a declared state of disaster: no later than 24 hours.\n• An allegation that someone caring for or with access to children abused drugs in the past seven days, or an abuse or neglect investigation by an entity other than the DFPS Child Care Investigations division: within 24 hours.\n• Arrest, indictment, or executed arrest warrant of an employee, foster parent, contractor, volunteer, or other adult, or a search warrant executed at the CPA or a foster home: as soon as the CPA becomes aware.\n• An allegation of a prohibited or inappropriate emergency behavior intervention: within 24 hours, with parents notified in the same time frame.`,
      },
      {
        heading: `Documenting Incidents and Notifying Parents of Deficiencies`,
        body: `A serious incident must be documented in a written report (§749.511). The report includes:\n• The foster or adoptive home name, address, and telephone number.\n• The time and date of the incident.\n• The name, age, gender, and date of admission of each child involved.\n• The names of adults involved and their roles, and any witnesses.\n• The nature and circumstances of the incident.\n• Interventions made, such as medical care and contacts.\n• The treating licensed health-care professional's name, findings, and treatment.\n• The resolution, and an update if a child returns after an unauthorized absence report was completed.\n\nProtect confidentiality: identifying information for one child should not be placed in another child's record, so de-identify incident reports as the technical assistance suggests.\n\nAdditional documentation (§749.513) includes any emergency behavior interventions in the 48 hours before a death, substantial injury, or suicide attempt, and for an unauthorized absence, the efforts to locate the child and the dates and times of notifying the parent and law enforcement. Keep incident reports on file for two years, easily accessible to Licensing (§749.515).\n\nIf a medically pertinent incident does not rise to a serious incident, you do not report it but you must document it as you would a serious incident (§749.503(b)).\n\nWhen Licensing cites a safe sleeping deficiency or an abuse, neglect, or exploitation deficiency in a foster home, you must notify parents within five days of receiving notice. Notify the parents of each child in the care of every foster home you verify, including children not in care on the day of the incident. Use Form 2970 for safe sleeping and Form 7266 for abuse, neglect, or exploitation, and keep proof of notification (§§749.517 and 749.519).`,
      },
      {
        heading: `Operation Records`,
        body: `Operation records are the agency-level documents Licensing expects to find.\n\nPolicies (§749.529): keep a copy of your policies and procedures at the agency, available to employees, contract staff, caregivers, Licensing, and clients on request. Keep copies of all current and previous policies for at least two years.\n\nProtecting records (§749.531 and §749.533): have policies for protecting paper and electronic records from destruction and loss, and for who inside and outside the agency may access them. If you keep electronic records, add policies covering what stays in the paper file versus the electronic file, computer security (passwords and confidentiality), routine data back-up, anti-virus protection, and limiting access to authorized persons. Electronic and digital signatures, including email approvals, are allowed (§749.534).\n\nHow current records must be (§749.535):\n• Documentation must be in the record no later than 30 days after the occurrence or event, or as otherwise specified.\n• Foster parents must submit copies of any records they keep within 15 days from the end of the month, and you file them in the child's record.\n\nAccess for Licensing (§749.537):\n• Active records must be available for immediate review and reproduction.\n• Archived records must be available within 48 hours.\n• Licensing must have reasonable access to your storage and file areas.\n\nDisaster plans: keep a copy of each current foster home disaster and emergency plan at the main office, the relevant branch office, or a central administratively designated location (§749.539, Medium-High weight).`,
      },
      {
        heading: `Client Records: Content, Location, Retention, and Release`,
        body: `You must maintain individualized, current, and complete master records for all clients, and the master record may be electronic (§749.571).\n\nWhere active records live (§749.573): a child's active master case record sits at the office where the managing child placement staff is located, a foster or adoptive home's record sits where its managing staff is located, and the main office keeps a master list of active client records with their locations. Archived records may be kept at the main office, the serving branch office, or a central designated location, with a master list at the main office (§749.581).\n\nActive child records:\n• An active child record is the record for the most recent 12 months of service (§749.575).\n• It must show the child's full name and another identifier, and known allergies and chronic conditions clearly visible on the exterior, with "no known allergies" noted when applicable (§749.577, Medium-High weight).\n• It must be kept accurate and current, locked in a safe location, and confidential (§749.579).\n\nRelease: unless releasing to a parent, to Licensing, or as required by law, you may not release any portion of a child's record without the written consent of the person legally authorized to consent (§749.583).\n\nRetention (§749.585):\n• Adoption child, birth parent, and adoptive family records: permanently, or transfer to the Bureau of Vital Statistics.\n• A foster child's complete record: two years from discharge, or until any investigation involving the child is resolved, whichever is longer.\n• Verified foster home records: at least five years after the home closes, including homes that never received placements.\n• Approved adoptive applicants not placed with a child: at least five years after withdrawal or the close of consideration.\n• Foster or adoptive applicants you did not verify or approve: at least one year after the denial.\n\nIf you cease operating, adoption records go to the DSHS Bureau of Vital Statistics or another licensed CPA (§749.587).`,
      },
      {
        heading: `Unauthorized Absences`,
        body: `Subchapter D, Division 5 builds a response system around runaways and other unauthorized absences.\n\nFor each unauthorized absence you must log it in an annual summary log and debrief the child (§749.590).\n\nThe annual summary log (§749.591) records, for each absence: the child's name, age, gender, and date of admission; when the absence was discovered; how long the child was gone or whether the child did not return; the responsible caregiver; the intake report number if a report was made to Licensing or DFPS; and whether law enforcement was contacted, including the agency and police report number. Maintain each annual summary log for five years and make them available to Licensing on request.\n\nDebriefing (§749.592):\n• Debrief the child as soon as possible, but no later than 24 hours after the child returns (Medium-High weight).\n• Discuss the circumstances that led to the absence, trauma informed strategies to avoid future absences, the child's condition, and what happened while away.\n• Allow the child to return to routine activities except those the foster parent determines inappropriate, and document this in the child's record.\n\nTriggered review (§749.501, §749.593 to §749.595):\n• A triggered review is required after a child's third unauthorized absence within a 60-day timeframe.\n• It must occur as soon as possible, but no later than 30 days after that third absence. A regularly scheduled service plan review can serve if it meets the content requirements and the timeline.\n• Participants are the child, the foster parent, and child placement staff. Notify the child's parent at least two weeks before.\n• It must review previous absences and debriefings, examine trauma informed alternatives, and produce a written plan to reduce absences.\n\nEvery six months you must conduct an overall agency evaluation of unauthorized absences, and keep the results for five years (§749.596).`,
      },
    ],
    scenarios: [
      {
        id: 'pd2s1',
        title: `The 15-Year-Old Who Did Not Come Home`,
        situation: `You are the CPA administrator. At 10 p.m. a foster parent calls to say a 15-year-old in her care left for a friend's house at 4 p.m. and has not returned or answered a phone. A caseworker tells you the same youth previously disclosed being trafficked, and this is her third unauthorized absence in the past 45 days.`,
        question: `What reporting, documentation, and follow-up duties are triggered?`,
        discussion: `For a child 13 or older the general rule is to report to Child Care Regulation, the parent, and law enforcement no later than 6 hours from when the absence is discovered if the child is still missing. However, the CPA must report immediately to all three (Child Care Regulation, the parent, and law enforcement) if the child has previously been alleged or determined to be a trafficking victim (§749.503(a)(10)), so do not wait. All reports go directly to the Texas Abuse and Neglect Hotline (§749.509). Document the absence in a written report with the efforts to locate the child, and the dates and times you notified the parent and law enforcement, including names of the people spoken to (§749.511 and §749.513). Add the absence to the annual summary log, kept five years (§749.591). When she returns, the foster parent or other appropriate person must debrief her within 24 hours (§749.592). Because this is her third absence within 60 days, a triggered review must occur no later than 30 days after the third absence, with the child, foster parent, and child placement staff, two weeks notice to the parent, and a written plan to reduce absences (§§749.593 to 749.595).`,
        keyTakeaway: `An absence by a child with a trafficking history is reported immediately, and a third absence in 60 days triggers a review within 30 days.`,
      },
      {
        id: 'pd2s2',
        title: `The Safe Sleeping Citation`,
        situation: `Licensing cites one of your foster homes for a safe sleeping deficiency involving an infant sleep surface. You receive the notice on Monday. Your office supervises 22 foster homes, with children in care in 19 of them. A staff member suggests notifying only the parents of the infant in the cited home.`,
        question: `Is the staff member's plan sufficient?`,
        discussion: `No. When Licensing finds a deficiency in a safe sleeping standard listed in §749.517(b), you must notify the parent of each child in the care of each foster home verified by your agency (§749.517(a)). Within five days after you receive notification of the deficiency, you notify the parents of every child in care at the time of notification, including a child who was not in care on the day of the incident (§749.519(a), Medium-High weight). Where your main or branch office supervises the homes, that office does the notifying. For safe sleeping, use Form 2970, Notification of Safe Sleeping Deficiency (§749.519(c)). You must also maintain proof, available for Licensing review, that you notified parents in writing (§749.519(e)). Parent means the person with legal responsibility, so if a child is in DFPS conservatorship you notify the caseworker (technical assistance).`,
        keyTakeaway: `Safe sleeping and abuse or neglect citations require written notice to the parents of every child in every verified foster home within five days.`,
      },
    ],
    quiz: [
      {
        id: 'pd2q1',
        question: `A child dies while in the CPA's care. By when must the CPA report to law enforcement?`,
        options: [
          `Within 24 hours`,
          `Within 2 hours`,
          `Immediately, but no later than 1 hour after the child's death`,
          `By the end of the next business day`,
        ],
        correct: 2,
        explanation: `§749.503(a)(1) requires reports to law enforcement immediately, but no later than 1 hour after the death. Child Care Regulation and parents must be notified as soon as possible, but no later than 2 hours after the death.`,
      },
      {
        id: 'pd2q2',
        question: `Where must serious incident reports be made under §749.509?`,
        options: [
          `Directly to the Texas Abuse and Neglect Hotline`,
          `To the agency administrator, who then reports to Licensing`,
          `By mail to the regional Licensing office`,
          `To the local police department only`,
        ],
        correct: 0,
        explanation: `§749.509(a) requires all serious incident reports to be made directly to the Texas Abuse and Neglect Hotline, and foster parents must report incidents involving a child in their care directly to the Hotline as well.`,
      },
      {
        id: 'pd2q3',
        question: `How long must a CPA keep copies of its incident reports on file?`,
        options: [
          `Six months`,
          `One year`,
          `Five years`,
          `Two years`,
        ],
        correct: 3,
        explanation: `§749.515 requires you to keep a copy of incident reports on file for two years, easily accessible to Licensing. The five-year retention applies to unauthorized absence annual summary logs and six-month evaluations.`,
      },
      {
        id: 'pd2q4',
        question: `Within what time frame must archived records be available for Licensing review and reproduction?`,
        options: [
          `Immediately`,
          `Within 48 hours`,
          `Within 7 days`,
          `Within 30 days`,
        ],
        correct: 1,
        explanation: `§749.537 requires active records to be available for immediate review and reproduction and archived records within 48 hours.`,
      },
      {
        id: 'pd2q5',
        question: `How long must a foster child's complete record be kept?`,
        options: [
          `Permanently`,
          `Five years from admission`,
          `Two years from the date of discharge, or until any investigation involving the child is resolved, whichever is longer`,
          `One year after the child turns 18`,
        ],
        correct: 2,
        explanation: `§749.585(b) sets retention for a foster child's record at two years from discharge or until resolution of any investigation involving the child, whichever is longer. Permanent retention (or transfer to Vital Statistics) applies to adoption records.`,
      },
      {
        id: 'pd2q6',
        question: `A triggered review of a child's unauthorized absences must occur no later than how many days after the child's third unauthorized absence within a 60-day timeframe?`,
        options: [
          `30 days`,
          `10 days`,
          `60 days`,
          `14 days`,
        ],
        correct: 0,
        explanation: `§749.593(a) requires the triggered review as soon as possible, but no later than 30 days after the third absence within 60 days. Parents must be notified at least two weeks before the review (§749.594(b)).`,
      },
      {
        id: 'pd2q7',
        question: `After a child returns from an unauthorized absence, by when must the debriefing take place?`,
        options: [
          `Within 72 hours`,
          `At the next service plan review`,
          `Within 7 days`,
          `As soon as possible, but no later than 24 hours after the child's return`,
        ],
        correct: 3,
        explanation: `§749.592(a) requires the debriefing as soon as possible but no later than 24 hours after the child's return (Medium-High weight), and it must be documented in the child's record.`,
      },
      {
        id: 'pd2q8',
        question: `Licensing cites one of your foster homes for a safe sleeping deficiency. Within how many days after you receive notification must you notify parents, and which form do you use?`,
        options: [
          `Within 24 hours, using Form 7266`,
          `Within five days, using Form 2970`,
          `Within five days, using Form 7266`,
          `Within 30 days, using Form 2962`,
        ],
        correct: 1,
        explanation: `§749.519(a) requires notice within five days, and §749.519(c) requires Form 2970, Notification of Safe Sleeping Deficiency. Form 7266 is for abuse, neglect, or exploitation deficiencies, and Form 2962 is the liability insurance verification form.`,
      },
    ],
  },
  {
    id: 'lcpaa-domain-3',
    number: 3,
    title: `Staff, Caregivers & Training`,
    icon: 'ri-team-line',
    summary: `Who may work for a child-placing agency and what they must be qualified and trained to do: employee basics, the administrator, child placement and management staff, treatment directors, volunteers, personnel records, and every training hour required of caregivers and employees.`,
    sections: [
      {
        heading: `General Employee Requirements`,
        body: `Subchapter E, Division 1 sets the baseline for every employee. An employee's behavior or health status must not present a danger to children in care (§749.605(a), Medium-High weight).\n\nEach employee who is regularly or frequently present while children are in care must:\n• Meet the background check requirements of Chapter 745, Subchapter F (High weight).\n• Have a record of tuberculosis screening showing freedom from contagious TB.\n• Be physically, mentally, and emotionally capable of performing assigned tasks and have the necessary skills.\n• Complete a notarized Licensing Affidavit for Applicants for Employment form, as specified in Human Resources Code §42.059.\n\nTuberculosis screening must happen before contact with children in care for all caregivers, employees, contract staff, volunteers, foster home household members, and employees in foster homes (§749.609).\n\nAll employees and caregivers, whether or not counted in the child/caregiver ratio, must (§749.607):\n• Demonstrate competency, prudent judgment, and self-control in the presence of children when no more specific rule applies (High weight).\n• Report suspected abuse, neglect, and exploitation to the Child Abuse Hotline and to the designated administrator or supervisor (High weight).\n• Know and comply with Chapter 749, Chapter 42 of the Human Resources Code, Chapter 745, and other laws relevant to their duties.\n\nForeign education counts toward educational qualifications if you provide supporting information showing equivalence, and documents in a foreign language must be translated into English (§749.603).`,
      },
      {
        heading: `The Child-Placing Agency Administrator`,
        body: `The administrator is the most heavily tested position in the chapter.\n\nQualifications (§749.631). The administrator must:\n• Meet the qualifications established by the agency's governing body.\n• Be a Licensed Child-Placing Agency Administrator under Chapter 43 of the Human Resources Code and Chapter 745, Subchapter N.\n• Be a full-time employee of the agency.\n• Be present at a Texas office of the agency to provide on-site administrative oversight.\n\nResponsibilities (§749.635). The administrator must have daily supervision and overall administrative responsibility for all offices, including branch offices, and ensure compliance with any current heightened monitoring plan. The administrator must also be responsible for or assign responsibility for:\n• Administering and managing the agency according to your policies and ensuring compliance with the chapter, Chapter 42 of the Human Resources Code, Chapter 745, and other laws.\n• Personnel matters: hiring, assigning duties, training, supervision, evaluation, and terminations.\n• Ensuring persons whose behavior or health status presents a danger to children are not allowed at the agency or foster homes.\n• Administering the evaluation plan and the plan to investigate reports of standards violations.\n\nDual roles (§749.633): an administrator may serve two residential child-care operations if both are in good standing, the size and scope are manageable by one person as clarified in the professional staffing plans, the person also holds a valid child-care administrator license if the second operation is a CPA, and at least one CPA manages 25 or fewer foster homes. The administrator must split a full-time schedule between the two (§749.631(b)).\n\nWhen the administrator is frequently or extendedly absent, designate an employee responsible for overall administration, and that designee must be a Licensed Child-Placing Agency Administrator (§749.637).`,
      },
      {
        heading: `Child Placement Staff and Management Staff`,
        body: `Your agency must identify both child placement staff and child placement management staff (§749.661).\n\nChild placement staff providing foster care services are responsible for (§749.663):\n• Deciding whether to admit a child, including the admission assessment, and placing the child in a foster home.\n• Case management: developing and updating service plans, maintaining direct contact with the child and foster parents, and conducting supervisory visits.\n• Orientation, assessment, and verification of foster parents.\n• Monitoring and supporting foster parents, including initiating development plans, corrective actions, or adverse actions.\n\nStaff providing adoption services handle admission and placement decisions, case management, services to birth parents, and orientation, assessment, and approval of adoptive parents.\n\nChild placement management staff must (§749.667):\n• Review and approve all child placement activities, supervisory visit documentation, investigation findings Licensing requested, and corrective and adverse action plans involving foster families.\n• Supervise child placement staff, including planning for their professional development.\n• Perform the staff's responsibilities directly when appropriate, such as when staff is absent.\n\nApproval is documented by signing and dating items such as admission assessments, placement documents, foster and adoptive home screenings, service plans, discharge or transfer plans, and restrictions imposed on a child (§749.669).\n\nBranch offices need assigned child placement management staff, who must hold and document at least 10 monthly supervision conferences per year with each branch-office employee performing child-placing activities (§749.677). There are no set caseload limits for placement staff, but caseloads must let staff meet children's needs and support homes, and you must stay within §749.305(a)(2) if you share an administrator (§749.679).`,
      },
      {
        heading: `Qualification Options for Placement Staff and Management Staff`,
        body: `Employees who perform child placement activities must meet one of two options (§749.673):\n• Option 1: a master's degree from an accredited college or university, or a bachelor's degree in social work or another human services field, plus one year of documented full-time experience in a CPA, a residential child-care operation, or as a DFPS conservatorship caseworker or foster adoptive home development worker (in assessments, service planning, or case management), or one year working under the direct supervision of management staff.\n• Option 2: a bachelor's degree from an accredited college or university plus two years of the same experience or supervised work.\n\nSupervised work requires 10 documented, monthly, face-to-face, individual, case-related conferences over each year. Practicum or field placement may count for up to 350 hours.\n\nEmployees who perform child placement management activities must meet one of three options (§749.675). Field placement or practicum may not be counted:\n• Option 1 (licensed in social work or another human services field): a master's degree in social work or a human services field plus nine graduate credit hours focused on family and individual function and interaction, plus one year of documented full-time experience.\n• Option 2 (not licensed): a master's degree plus nine credit hours, or a bachelor's in social work or a human services field plus nine credit hours, plus two years of experience.\n• Option 3 (not licensed): a bachelor's degree plus nine credit hours, plus three years of experience.\n\nExperience must be in a CPA, a residential child-care operation, or as a Child Protective Services caseworker for DFPS, conducting assessments, service planning, or case management.\n\nBecause supervised experience depends on those 10 conferences, document each one.`,
      },
      {
        heading: `Treatment Directors, Nurses, Volunteers, and Personnel Records`,
        body: `Treatment director (§749.721 to §749.727). You must have a treatment director if you provide treatment services to 30 or more children at any one time, or to more than 50% of the children in your care, and the treatment director must be a full-time employee (Medium-High weight). The director is responsible for the overall treatment program, including clinical responsibility for therapeutic interventions. Qualifications depend on the service:\n• Intellectual disability or autism spectrum disorder: licensed as a psychiatrist, psychologist, professional counselor, clinical social worker, marriage and family therapist, or registered nurse; or a TEA-certified education diagnostician with a master's in special education or a human services field and three years of experience with these children.\n• Primary medical needs: a physician or a licensed registered nurse.\n• Emotional disorders: a psychiatrist or psychologist; or a master's degree in a human services field plus three years of treatment experience including one year in a residential setting; or a licensed master social worker, clinical social worker, professional counselor, or marriage and family therapist with the same three years of experience.\n\nOne director may serve if qualified for the most prevalent treatment service. For primary medical needs, a registered nurse must be on staff or on contract (§749.741).\n\nVolunteers and contractors: keep a personnel record for each volunteer including a signed statement of the duty to report suspected abuse, neglect, or exploitation to the Hotline and the administrator (§749.761). Those who perform employee or caregiver functions must meet the same requirements (§749.763). A person may not perform court-ordered or probation community service at your agency (§749.769, High weight).\n\nPersonnel records (§749.553) must show the date of employment, qualifications, job description, licenses, TB screening, the notarized Licensing Affidavit, signed policy and reporting statements, proof of background check requests (High weight), a driver's license or DPS check within 12 months for anyone who transports a child, training records, and separation date and reason. Keep annual training records for the last full and current training year, and other personnel records for one year after the last day or until an investigation is resolved, whichever is longer (§749.555). Background check results are confidential (§749.554).`,
      },
      {
        heading: `Training Requirements for Caregivers and Employees`,
        body: `Caregivers (Subchapter F, Division 1):\n• Before verification, each caregiver completes the pre-verification training: laws and rules overview, the CPA's philosophy and policies, the reasonable and prudent parent standard, the verification agreements, and the rights and responsibilities statement (§749.801, High weight).\n• Before a child is placed, at least one foster parent completes 4 hours of general caregiver training, 6 hours of emergency behavior intervention (EBI) training, and safe sleeping training if the home will care for a child younger than two. Other caregivers, including a second foster parent, complete them within 90 days after placement (§749.803).\n• Psychotropic medication training must be finished before a caregiver administers that medication.\n• One foster parent must be certified in pediatric first aid and CPR before verification, and others within 90 days after verification (§749.805).\n• Each year the CPA evaluates the home and provides extra training if non-compliance is found. Caregivers in homes serving a child receiving treatment services for emotional disorders, intellectual disabilities, or autism spectrum disorder receive at least one hour of annual training on those services (§749.807).\n\nEmployees (Division 2):\n• Orientation before beginning job duties (§749.821).\n• Within 30 days of hire, administrators, treatment directors, placement staff, management staff, and full-time professional service providers complete at least two hours on normalcy, trauma informed care, and preventing communicable diseases, plus EBI training. Adoption-only employees are exempt, and primary medical needs employees are exempt from EBI (§749.823).\n• Child placement staff, management staff, executive director, treatment director, and administrator complete at least 15 hours of annual training, including at least one hour on preventing, recognizing, and reporting abuse, neglect, and exploitation (§749.825).\n\nDocumentation: end every training with a signed and dated test, keep proof in the person's record, and make sure pediatric first aid and CPR certificates carry an expiration date and are renewed (§749.831).`,
      },
    ],
    scenarios: [
      {
        id: 'pd3s1',
        title: `Hiring a Case Manager`,
        situation: `You are the CPA administrator. A candidate holds a bachelor's degree in business administration and has six months of experience as a teacher's aide. You want to hire the candidate as child placement staff and begin supervising foster homes within the week. Her notarized affidavit and background check request are still pending.`,
        question: `Does she qualify, and what must be in place before she starts?`,
        discussion: `For child placement staff, Option 2 in §749.673 allows a bachelor's degree from an accredited college or university plus two years of documented full-time experience in a CPA, a residential child-care operation, or as a DFPS caseworker (or foster adoptive home development worker), or two years working under the direct supervision of child placement management staff. Supervised work needs 10 documented, monthly, face-to-face, individual, case-related conferences over each annual period until her experience totals two years. Teacher's aide experience does not count. So she can be hired only if you will provide that direct supervision. In addition, she must complete a notarized Licensing Affidavit and meet background check requirements (High weight) and show a TB screening before contact with children (§749.605). Before beginning duties, give her orientation (§749.821), and within 30 days of starting, at least two hours of training on normalcy, trauma informed care, and communicable diseases, plus EBI (§749.823). Her personnel record must include proof of the background check request (§749.553, High weight).`,
        keyTakeaway: `Match the person to a documented qualification option, and complete screening, affidavit, orientation, and 30-day training on the required timelines.`,
      },
      {
        id: 'pd3s2',
        title: `Training a New Foster Family`,
        situation: `A married couple is nearing verification. The home will care for a 10-month-old infant. Only the wife has completed any training. The husband works away from home for weeks at a time, and the agency has not yet tested either of them on their coursework.`,
        question: `What training must be complete and when?`,
        discussion: `Before placing a child, at least one foster parent must complete 4 hours of general caregiver training, 6 hours of EBI training (unless the CPA decides EBI does not directly apply to the ages and services), and, because the child is younger than two, safe sleeping training (§749.803(a), High weight). The wife can satisfy this before placement, and the husband must complete the same training within 90 days after the CPA places the child (§749.803(b)). Before the CPA issues the verification, one foster parent must be certified in pediatric first aid and pediatric CPR, and the other within 90 days after verification (§749.805). Both caregivers must complete the pre-verification training before verification (§749.801). Every training must end with a test showing how to apply the skills, signed and dated by the caregiver, and the agency must keep proof and certificates with expiration dates (§749.831). After verification, the CPA evaluates the home annually and provides additional training when concerns are found (§749.807).`,
        keyTakeaway: `One foster parent completes the core hours before placement, the second foster parent has 90 days after placement, and every training ends with a signed test.`,
      },
    ],
    quiz: [
      {
        id: 'pd3q1',
        question: `When must a child-placing agency have a treatment director?`,
        options: [
          `If it provides treatment services to 10 or more children at any time`,
          `If it has any child in care with a mental health diagnosis`,
          `If it provides treatment services to 30 or more children at any one time, or to more than 50% of the children in care`,
          `Only if it operates a branch office`,
        ],
        correct: 2,
        explanation: `§749.721 requires a treatment director when treatment services go to 30 or more children at any one time or to more than 50% of children in care, and the director must be a full-time employee.`,
      },
      {
        id: 'pd3q2',
        question: `How many hours of annual training must a CPA administrator and child placement staff complete?`,
        options: [
          `At least 15 hours`,
          `At least 8 hours`,
          `At least 20 hours`,
          `At least 30 hours`,
        ],
        correct: 0,
        explanation: `§749.825 requires at least 15 hours of annual training for child placement staff, management staff, executive director, treatment director, and administrator, including at least one hour on preventing, recognizing, and reporting abuse, neglect, and exploitation.`,
      },
      {
        id: 'pd3q3',
        question: `Within what time after starting the job must a new administrator or child placement staff member complete at least two hours of training on normalcy, trauma informed care, and communicable diseases, plus EBI training?`,
        options: [
          `Before the first day`,
          `Within 30 days`,
          `Within 90 days`,
          `Within one year`,
        ],
        correct: 1,
        explanation: `§749.823(a) requires this training within 30 days after starting the job (High weight). Orientation under §749.821 must occur before beginning job duties.`,
      },
      {
        id: 'pd3q4',
        question: `Before a child is placed in a foster home, what training must at least one foster parent complete?`,
        options: [
          `Two hours of general training only`,
          `Four hours of general caregiver training, six hours of EBI training, and safe sleeping training if the home will care for a child younger than two`,
          `Twelve hours of pre-service training and no EBI`,
          `Fifteen hours of general training`,
        ],
        correct: 1,
        explanation: `§749.803(a) requires four hours of general caregiver training, six hours of EBI training, and safe sleeping training for a home caring for a child younger than two. The CPA may decide not to require EBI if it does not directly apply (§749.803(f)).`,
      },
      {
        id: 'pd3q5',
        question: `How long does a second foster parent have to complete the required general, EBI, and safe sleeping training after the CPA places a child in the home?`,
        options: [
          `30 days`,
          `60 days`,
          `6 months`,
          `90 days`,
        ],
        correct: 3,
        explanation: `§749.803(b) gives other caregivers, including the second foster parent, 90 days after the CPA places the child.`,
      },
      {
        id: 'pd3q6',
        question: `Which statement about the child-placing agency administrator is correct under §749.631?`,
        options: [
          `The administrator may be a part-time employee if a back-up is named`,
          `The administrator must be a full-time employee, licensed as a Child-Placing Agency Administrator, and present at a Texas office of the agency`,
          `The administrator only needs to meet the governing body's qualifications`,
          `The administrator must hold a master's degree in social work`,
        ],
        correct: 1,
        explanation: `§749.631(a) requires meeting the governing body's qualifications, being licensed under Chapter 43 of the Human Resources Code and Chapter 745, Subchapter N, being a full-time employee, and being present at a Texas office for on-site oversight.`,
      },
      {
        id: 'pd3q7',
        question: `Which is a qualification option for child placement management staff who are not licensed in social work or another human services field?`,
        options: [
          `A bachelor's degree, nine credit hours focused on family and individual function and interaction, and three years of documented full-time experience`,
          `A high school diploma and five years of experience`,
          `A bachelor's degree and one year of practicum experience`,
          `A bachelor's degree and two years of experience as a volunteer`,
        ],
        correct: 0,
        explanation: `§749.675 Option 3 allows a bachelor's degree from an accredited college or university plus nine credit hours focused on family and individual function and interaction and three years of documented full-time experience. Practicum experience may not be counted.`,
      },
      {
        id: 'pd3q8',
        question: `May a person fulfill court-ordered community service hours at a child-placing agency?`,
        options: [
          `Yes, if supervised at all times`,
          `Yes, but only at the administrative office`,
          `Yes, after a background check`,
          `No, a person may not perform community service at the agency`,
        ],
        correct: 3,
        explanation: `§749.769 (High weight) prohibits community service at the agency, including service required because of probation, parole, or court order resulting from criminal activity.`,
      },
    ],
  },
];
