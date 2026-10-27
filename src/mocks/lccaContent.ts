import type { StudyDomain } from './studyTypes';
import { lccaGroDomainsA } from './lccaGroDomainsA';
import { lccaGroDomainsB } from './lccaGroDomainsB';

// The four Chapter 748 deep-dive domains (numbers 8-11). Domains 1-7 live in lccaGroDomains{A,B}.ts.
const lccaGro748Domains = [
  {
    id: 'domain-748',
    number: 8,
    title: 'Chapter 748 — General Residential Operations (GRO)',
    icon: 'ri-home-heart-line',
    summary: 'The specific rules, timelines, ratios, and requirements of 26 TAC Chapter 748 — the primary standard tested on the LCCA exam for residential child care.',
    sections: [
      {
        heading: 'Key Timelines You MUST Memorize',
        body: `The LCCA exam heavily tests specific deadlines from Chapter 748. These are non-negotiable — know them cold.\n\n**Service Planning Timelines:**\n• Preliminary service plan: Within 72 HOURS of admission\n• Initial service plan: Within 45 DAYS of admission\n• Service plan review — Child-care services: At least every 180 DAYS\n• Service plan review — Treatment services (emotional disorder, autism, primary medical): At least every 90 DAYS\n• Service plan review — Intellectual disabilities (first year): At least every 180 DAYS; thereafter annually\n\n**Admission & Assessment Timelines:**\n• Admission assessment (non-emergency): Must be completed PRIOR TO admission\n• Emergency admission assessment: All requirements completed within 40 DAYS\n• Emergency admission — treatment services: Child may not continue more than 30 DAYS (or 10 days for RTC) without required psychiatric/psychological evaluation\n• Preliminary service plan for emergency admission: Within 72 HOURS\n• Medical exam at admission: Within 30 DAYS (or within 7 days before/3 days after for primary medical needs)\n• Dental appointment scheduled: Within 30 DAYS; exam completed within 90 DAYS\n\n**Reporting Timelines (Serious Incidents):**\n• Child death — report to Licensing, parents: ASAP, no later than 2 HOURS; law enforcement: within 1 HOUR\n• Substantial physical injury — report to Licensing: Within 24 HOURS\n• Unauthorized absence (child under 6): Law enforcement IMMEDIATELY upon determining the child is not on the premises and still missing; Licensing and parents within 2 HOURS of notifying law enforcement\n• Unauthorized absence (child 6–12): Law enforcement and parents within 2 HOURS of determining the child is not on the premises (if still missing); Licensing within 2 HOURS of notifying law enforcement\n• Unauthorized absence (child 13+): All parties no later than 6 HOURS from discovery if still missing\n• Suicide attempt — report to Licensing: As soon as you become aware\n• Communicable disease — report to Licensing and parents: Within 24 HOURS\n\n**Personnel & Record Timelines:**\n• Notify Licensing of administrator vacancy: Within 2 DAYS\n• Fill vacant administrator position (no backup): Within 60 DAYS\n• Notify Licensing of policy changes: At least 15 DAYS before changes\n• Notify Licensing of location change: At least 30 DAYS before\n• Incident reports kept on file: 2 YEARS\n• Child records retained after discharge: 2 YEARS (or until investigation resolved)\n• Personnel records retained after separation: 1 YEAR (or until investigation resolved)\n• Annual summary log for unauthorized absences retained: 5 YEARS\n• Overall operation evaluation for unauthorized absences retained: 5 YEARS`,
      },
      {
        heading: 'Child/Caregiver Ratios — Chapter 748 GRO',
        body: `These ratios apply to General Residential Operations.\n\n**Waking Hours Ratios:**\n• 1 caregiver : 5 children — if at least ONE child requires treatment services\n• 1 caregiver : 8 children — if NO children require treatment services\n• Children under 5 years old COUNT AS 2 CHILDREN in ratio calculations\n\n**Nighttime Sleeping Ratios (caregiver AWAKE):**\n• 1:15 — if at least one child requires treatment services\n• 1:24 — if no children require treatment services\n\n**Nighttime Sleeping Ratios (caregiver SLEEPS):**\n• 1:10 — if at least one child requires treatment services\n• 1:16 — if no children require treatment services\n\n**Key ratio rules:**\n• Ratios cannot be averaged across the operation — each GROUP must meet ratio\n• A person working in an administrative capacity cannot be counted in ratio\n• A child does NOT count in ratio while participating in an approved unsupervised childhood activity\n• Children under 5 ALWAYS count as 2 children — even at night\n• Ratio violations are Medium-High weight (§748.1003(a)); not employing enough caregivers is High (§748.1009)\n• A caregiver must ALWAYS be awake when caring for a child needing constant supervision`,
      },
      {
        heading: 'Service Plans — What Must Be Included',
        body: `Service plans are a major exam topic. Know what goes in each type.\n\n**Preliminary Service Plan (within 72 hours):**\n• Addresses IMMEDIATE needs (supervision, school enrollment, medical care, clothing)\n• For treatment services children, must also include: immediate treatment needs, educational/medical/dental needs, how needs will be met, issues that could escalate behavior, who is responsible for each need\n\n**Initial Service Plan (within 45 days):**\n• Based on admission assessment; must integrate trauma-informed care\n• Must include: medical/dental needs, educational needs, plans for normalcy, therapeutic needs, family relationship plans, specific goals and strategies, discipline and behavior intervention techniques\n• For children 13+: healthy relationships, boundaries, STDs, reproduction\n• For children 14+: life skills training (grocery shopping, cooking, transportation, money management)\n• For children 16+: preparation for independent living, employment\n• For high-risk behavior children: safety contract\n\n**Service planning team must include:**\n• At least 1 current caregiver\n• A person designated to make decisions about childhood activities\n• At least 1 professional level service provider\n• For treatment services: also 2 licensed professionals\n• Child (if verbal and able) and parents must be INVITED\n• Parents must have at least 2 WEEKS advance notice\n\n**Service plan implementation:** No later than 15 DAYS after the scheduled service planning meeting`,
      },
      {
        heading: 'Administrator Requirements — Chapter 748',
        body: `**Qualifications:**\n• Must be a Licensed Child-Care Administrator (LCCA) per Chapter 43\n• Must be a FULL-TIME employee of the operation\n\n**Key Responsibilities (§748.535):**\n• Daily supervision and on-site administrative responsibility\n• Oversee staffing patterns to ensure supervision\n• Have a system for emergency coverage\n• Ensure no child is used as a caregiver\n• Ensure persons with dangerous behavior/health status are not at the operation\n\n**Backup administrator:**\n• When absent frequently/extended: must designate a LICENSED administrator as backup\n• If position becomes vacant with NO backup: 60 DAYS to obtain a licensed administrator\n• Must notify Licensing within 2 DAYS of administrator vacancy\n\n**Two-operation rule:**\n• Administrator CAN serve two residential operations if both are in good standing, size is manageable, a CPA manages no more than 25 foster homes (and the administrator holds a CPA Administrator License), and GROs/RTCs are contiguous (a CPA need not be)\n• A holder of a PROVISIONAL child-care administrator's license may only serve ONE operation (§748.533(c))`,
      },
      {
        heading: 'Serious Incident Reporting — Chapter 748',
        body: `All serious incident reports go to the Texas Abuse and Neglect Hotline.\n\n**Child Death:** Licensing & Parents: ASAP, no later than 2 hours | Law Enforcement: within 1 hour\n**Substantial Physical Injury:** Licensing: within 24 hours | Parents: immediately after ensuring safety | Law Enforcement: NOT required\n**Abuse/Neglect Allegations:** Licensing: as soon as aware | Parents: immediately after ensuring safety | Law Enforcement: NOT required\n**Unauthorized Absence — Child under 6:** Law Enforcement: IMMEDIATELY upon determining the child is not on the premises and still missing | Licensing & Parents: within 2 hours of notifying law enforcement\n**Unauthorized Absence — Child 6–12:** Law Enforcement & Parents: within 2 hours of determining the child is not on the premises (if still missing) | Licensing: within 2 hours of notifying law enforcement\n**Unauthorized Absence — Child 13+:** All parties: no later than 6 hours from discovery | IMMEDIATELY if trafficking victim, believed abducted, or no intention of returning\n**Suicide Attempt:** Licensing: as soon as aware | Parents: immediately after ensuring safety | Law Enforcement: NOT required\n\n**After unauthorized absence return:**\n• Debrief child: ASAP, no later than 24 HOURS after return\n• 3 unauthorized absences within 60 days: triggered review within 30 DAYS\n• Overall operation evaluation: Every 6 MONTHS`,
      },
      {
        heading: 'Personnel Requirements — Chapter 748',
        body: `**Caregiver Minimum Qualifications:**\n• Age 18+ if all children in group are under 13\n• Age 21+ if at least one child in group is 13 or older\n• High school diploma or GED\n\n**Pre-Service Training for Caregivers:**\n• General pre-service: 8 HOURS (4 hours before counting in ratio; remaining within 30 days)\n• EBI (no EBI allowed): 8 HOURS | EBI (EBI allowed, treatment services): 16 HOURS\n• Safe sleeping (children under 2): Must complete BEFORE counting in ratio\n• Psychotropic medication: Must complete BEFORE administering\n\n**Annual Training Requirements:**\n• Less than 25 treatment children (or less than 30%): 20 HOURS/year\n• 25+ treatment children (or 30%+): 50 HOURS/year\n• Cottage homes: 20 HOURS/year\n• Mandatory topics: EBI (4 hours every 6 months for treatment operations), Trauma-Informed Care (2 hours), Normalcy (1 hour)\n\n**Employee Annual Training:**\n• Without professional license: 20 HOURS | With professional license: 15 HOURS\n• Self-study limit: No more than 3 hours/year\n• Self-instructional limit: No more than 80% of required hours\n• Carry-over: Maximum 15 hours to next year`,
      },
      {
        heading: 'Medication Requirements — Chapter 748',
        body: `**Storage:**\n• All medication: LOCKED container\n• Schedule II controlled substances: DOUBLE LOCK in SEPARATE container\n• Discontinued/expired medication: Inventoried and stored SEPARATELY from current medications\n\n**Administration:**\n• General written consent required for routine, preventive, and emergency medications\n• Specific written consent required for each NEW psychotropic medication\n• Administer within 1 HOUR of preparation\n• Do NOT administer from same container to more than one child (prescription medications)\n\n**Medication Records:**\n• Update within 2 HOURS of administration (24 hours for cottage homes)\n• Count each prescription medication at least DAILY\n\n**Medication Errors:**\n• Contact health-care professional IMMEDIATELY (except wrong time or missed dose)\n• Document within 24 HOURS\n\n**Psychotropic Medication:**\n• Evaluate effectiveness at least QUARTERLY\n• If not substantiated within 90 days: written rationale required; continuation max additional 90 days (total 180 days)`,
      },
      {
        heading: 'Child Rights — Chapter 748',
        body: `**Prohibited Discipline (NEVER allowed):**\n• Shaking a child [High]\n• Corporal punishment — spanking, hitting [High]\n• Unproductive work — moving rocks, digging holes [Medium]\n• Denying food, sleep, bathroom, mail, or family visits as punishment [High]\n• Remarks that belittle or ridicule the child or family [Medium-High]\n• Threatening loss of placement [Medium]\n• Demeaning behavior to embarrass, control, harm, or isolate [Medium-High]\n\n**Prohibited Techniques (NEVER used on any child):**\n• Chemical restraints [High]\n• Aversive conditioning [High]\n• Pressure points [High]\n• Rebirthing therapy [High]\n• Hug/holding therapy [High]\n• Taser or stun guns [High]\n• Personal restraints that impair breathing, obstruct the airway, obstruct the view of the face, interfere with communicating distress, or twist limbs (§748.2605(a)); prone/supine only as a transitional hold of no more than one minute, as a last resort, with a trained observer (§748.2605(b))\n\n**Privacy Rights:**\n• Cannot open/read mail or screen phone calls without assistance need\n• Mail/call restrictions continuing more than 30 DAYS: re-evaluated MONTHLY by PLSP\n• Sibling contact restrictions: re-evaluated every 60 DAYS\n\n**Search Rules:**\n• May search with REASONABLE SUSPICION\n• RTCs and emergency care programs may conduct ROUTINE searches\n• Clothing removal searches: same-gender caregiver only; second caregiver must witness\n• Body cavity searches: PROHIBITED except for the mouth`,
      },
    ],
    scenarios: [
      {
        id: 'd748s1',
        title: 'The 72-Hour Clock',
        situation: 'A 14-year-old boy is admitted to your GRO on an emergency basis on Monday at 6 PM. It is now Wednesday at 7 PM — 49 hours later. Your professional level service provider has not yet completed the preliminary service plan. She says she has been busy with other children and will get to it tomorrow.',
        question: 'What is the problem, and what do you do right now?',
        discussion: 'The preliminary service plan was due within 72 hours of admission — that means by Thursday at 6 PM. You still have about 23 hours, but this is not a "get to it tomorrow" situation. The preliminary service plan must be completed tonight or first thing tomorrow morning at the absolute latest. The PLSP needs to understand that this is a regulatory deadline, not a suggestion. The preliminary plan must address his immediate needs: supervision requirements, school enrollment, medical care, and clothing. For a child receiving treatment services, it must also include his immediate treatment needs, educational/medical/dental needs, and identification of issues that could escalate his behavior. Assign this as an urgent priority and follow up to confirm completion.',
        keyTakeaway: 'Preliminary service plan = 72 hours. Initial service plan = 45 days. These are hard deadlines under Chapter 748 — not guidelines.',
      },
      {
        id: 'd748s2',
        title: 'The Ratio Calculation',
        situation: 'Your GRO has 6 children in a group during waking hours. Three of the children receive treatment services for emotional disorders. Two caregivers are currently assigned to this group. One caregiver steps out to handle a phone call in the hallway. Is the group in ratio?',
        question: 'Calculate the required ratio and determine if you are in compliance.',
        discussion: 'Because at least one child in the group requires treatment services, the ratio is 1:5 — not 1:8. With 6 children and only 1 caregiver present (the second stepped out), you are OUT OF RATIO. The caregiver in the hallway cannot be counted in ratio because they are not working directly with the group. You need at least 2 caregivers present with this group at all times during waking hours. The caregiver must return to the room immediately, or another qualified adult must enter the room. This is a Medium-High weight ratio violation (§748.1003(a)) in progress.',
        keyTakeaway: 'In a GRO, if ANY child in the group requires treatment services, the waking ratio is 1:5. Children under 5 count as 2. Only caregivers WORKING DIRECTLY with the group count in ratio.',
      },
    ],
    quiz: [
      {
        id: 'd748q1',
        question: 'Under Chapter 748, a preliminary service plan must be completed within:',
        options: ['24 hours of admission', '48 hours of admission', '72 hours of admission', '7 days of admission'],
        correct: 2,
        explanation: 'The preliminary service plan must be completed within 72 hours of admission to address the child\'s immediate needs.',
      },
      {
        id: 'd748q2',
        question: 'Under Chapter 748, an initial service plan must be completed within:',
        options: ['30 days of admission', '40 days of admission', '45 days of admission', '60 days of admission'],
        correct: 2,
        explanation: 'The initial service plan must be completed within 45 days of admission under §748.1335.',
      },
      {
        id: 'd748q3',
        question: 'In a GRO during waking hours, if at least one child in the group requires treatment services, the required ratio is:',
        options: ['1:4', '1:5', '1:8', '1:10'],
        correct: 1,
        explanation: 'When at least one child requires treatment services, the waking ratio is 1:5. If no children require treatment services, the ratio is 1:8.',
      },
      {
        id: 'd748q4',
        question: 'Under Chapter 748, how long does an operation have to fill a vacant administrator position if there is no backup administrator?',
        options: ['30 days', '45 days', '60 days', '90 days'],
        correct: 2,
        explanation: 'Under §748.154, if there is no backup administrator, the operation has 60 days from the date the position becomes vacant before CCR can cite for not having an administrator.',
      },
      {
        id: 'd748q5',
        question: 'Service plan reviews for children receiving treatment services for emotional disorders must occur at least every:',
        options: ['45 days', '60 days', '90 days', '180 days'],
        correct: 2,
        explanation: 'Service plans for children receiving treatment services for emotional disorders, autism spectrum disorder, or primary medical needs must be reviewed at least every 90 days.',
      },
    ],
  },
  {
    id: 'domain-748b',
    number: 9,
    title: 'Ch. 748 — Admission, Assessment & Physical Environment',
    icon: 'ri-door-open-line',
    summary: 'Admission requirements, assessment timelines, physical environment standards, and transportation rules under 26 TAC Chapter 748.',
    sections: [
      {
        heading: 'Admission Requirements — Chapter 748',
        body: `Before admitting a child to a GRO, specific requirements must be met. The LCCA exam tests these in detail.\n\n**Pre-Admission Requirements (non-emergency):**\n• Admission assessment (§748.1217(b)) completed PRIOR TO admission (§748.1215)\n• Placement agreement signed by the parent, including a medical consent form signed by a person legally authorized to consent (§748.1207)\n• Admission information in the child's record (§748.1205)\n• Remaining assessment items (social history, etc., §748.1217(c)) added before the initial service plan is completed\n\n**Emergency Admission:**\n• Child may be admitted without completing all pre-admission requirements\n• All requirements must be completed within 40 DAYS of admission\n• Preliminary service plan still required within 72 HOURS\n• For treatment services, the child may not continue in care more than 30 days (10 days for an RTC) after admission unless the required evaluation/assessment (§748.1219) has been received (§748.1269(2))\n\n**Admission Assessment Must Include:**\n• Child's history and background\n• Current physical and mental health status\n• Educational history and current status\n• Social history and family relationships\n• Strengths, interests, and cultural background\n• Trauma history (to the extent known)\n• Risk factors and protective factors\n• Immediate needs upon admission`,
      },
      {
        heading: 'Medical & Dental Requirements at Admission',
        body: `Chapter 748 sets specific timelines for medical and dental care at admission.\n\n**Medical Examination (§748.1223):**\n• Exam by a health-care professional within 30 DAYS after admission\n• Not required if there is documentation of a medical exam within the PAST YEAR (including the health passport for children in DFPS conservatorship)\n• Children with primary medical needs: exam within 7 days BEFORE or 3 days AFTER admission\n• A child showing symptoms of abuse or illness must be examined immediately\n\n**Dental (§748.1225):**\n• Child 3 or older: appointment SCHEDULED within 30 DAYS and exam COMPLETED within 90 DAYS (not required if a dental exam within the past year is documented)\n• Child under 3: dentist exam only if a health-care professional recommends it\n\n**Immunizations (§748.1539):**\n• Complete by the date of admission unless exempt; a child in foster care may be admitted temporarily for 30 days if acceptable proof is unavailable\n\n**Vision and Hearing (§748.1545):**\n• Each child admitted must be screened per Health and Safety Code ch. 36, with results (or a parent statement/affidavit) in the record\n\n**TB (§748.1583):**\n• Anyone over age 1 who lives, works, or volunteers needs a documented TB screening within 30 days before/after starting; documentation in the record within 40 days`,
      },
      {
        heading: 'Physical Environment Standards — Chapter 748',
        body: `The physical environment of a GRO must meet specific standards to ensure children's safety, dignity, and well-being.\n\n**Sleeping Areas:**\n• Floor space may not be averaged and excludes closets/alcoves\n• Single-occupancy bedroom: at least 80 square feet; shared bedroom: at least 60 square feet per occupant and no more than 4 occupants (§748.3357)\n• A child 6 or older must not share a bedroom with a child of the opposite gender unless they are siblings, the older child is the younger child's parent, or both are non-ambulatory with primary medical needs; the service planning team must assess and document approval (§748.3363)\n• A child must never sleep in the same bed as an adult caregiver (§748.3361(c))\n\n**Bathroom Facilities:**\n• Minimum 1 toilet per 8 children\n• Minimum 1 sink per 8 children\n• Minimum 1 bathtub or shower per 8 females and per 8 males (§748.3397)\n• Separate bathroom facilities for children and staff (or scheduled use)\n• Children of different genders must have separate bathroom facilities (or scheduled use)\n\n**Living/Activity Space:**\n• Minimum 40 square feet of indoor activity space per child (excluding sleeping areas, bathrooms, hallways)\n• Outdoor activity space must be available\n• Space must be clean, safe, and free from hazards\n\n**Safety Requirements:**\n• All firearms and ammunition must be stored in a locked container, separate from each other\n• Cleaning supplies, chemicals, and medications must be stored out of children's reach\n• Hot water temperature must not exceed 120°F at fixtures used by children\n• Smoke detectors required in each sleeping area and on each floor\n• Carbon monoxide detectors required if gas appliances are present\n• Fire extinguishers must be accessible and inspected annually`,
      },
      {
        heading: 'Transportation Requirements — Chapter 748',
        body: `Transportation of children in GRO care is heavily regulated under Chapter 748.\n\n**Driver (§748.4003):** at least 21 years old (a child in care may transport other children only with a valid license, insurance, and service planning team permission, §748.4005); covered by automobile insurance; current license for the vehicle type.\n**Vehicle:** do not exceed capacity; safe speed; safe operating condition, registered with a current inspection sticker (§748.4083); no handgun in the vehicle (§748.3935).\n**Child safety:** follow federal, state, and local law including child passenger safety seat laws (§748.4041); one person per seat belt or seat (§748.4045); never leave a child under 8 unattended in a vehicle and never let a child under 8 cross a street without an adult (§748.4011).\n**Records:** name and valid license copy for each driver; insurance verification (§748.4111).\n**Ratio:** the child/caregiver ratio applies to activities away from the operation, including appointments (§748.1017).`,
      },
      {
        heading: 'Food, Clothing & Personal Needs — Chapter 748',
        body: `Chapter 748 sets specific standards for meeting children's basic physical needs.\n\n**Food Requirements:**\n• Three meals and at least one snack a day\n• Children must not be denied food as punishment (High Weight violation)\n• Special dietary needs (medical, religious, cultural) must be accommodated\n• Children must have access to water at all times\n• Meals must be served at regular, predictable times\n\n**Clothing Requirements:**\n• Each child must have their own clothing — clothing may not be shared without consent\n• Clothing must be clean, properly fitting, and appropriate for the weather\n• Children must have access to their own clothing at all times\n• Clothing may not be used as a reward or withheld as punishment\n\n**Personal Hygiene:**\n• Children must have access to personal hygiene items (toothbrush, soap, shampoo, etc.)\n• Personal hygiene items may not be shared\n• Children must be allowed to bathe/shower regularly\n\n**Personal Belongings:**\n• Children have the right to keep personal belongings\n• Personal belongings may not be confiscated as punishment\n• Children must be allowed to keep and display personal items in their sleeping area\n• Upon discharge, all personal belongings must be returned to the child`,
      },
    ],
    scenarios: [
      {
        id: 'd748bs1',
        title: 'The Emergency Admission Clock',
        situation: 'A 10-year-old girl is admitted to your GRO on an emergency basis on a Friday evening. It is now 35 days later. Your staff has completed the preliminary service plan and the initial service plan, but the medical examination has not yet been scheduled. Your admission coordinator says she has been trying to get an appointment but the pediatrician is booked.',
        question: 'What is the problem, and what must happen in the next 5 days?',
        discussion: 'The medical examination is already overdue. Under §748.1223(a) a child must have a medical examination within 30 days after admission (unless an exam within the past year is documented); the 40-day deadline in §748.1269 applies to completing all admission-assessment requirements after an emergency admission. At day 35, get the exam done immediately with any available provider (urgent care, another pediatrician, clinic), document every attempt, and finish the remaining admission-assessment items within the 40 days (5 days left). If the child receives treatment services, also confirm the 30-day (10 for RTC) evaluation limit in §748.1269(2).',
        keyTakeaway: 'Medical exam = within 30 days of admission (§748.1223). Emergency-admission assessment items = within 40 days (§748.1269). "The doctor is booked" does not extend a deadline.',
      },
      {
        id: 'd748bs2',
        title: 'The Sleeping Room Issue',
        situation: 'Your GRO has 10 children. Due to a recent admission, you now have 5 children in one sleeping room. The room is 180 square feet. Two of the children are 7-year-old boys and one is a 7-year-old girl. The other two are 14-year-old boys.',
        question: 'Identify all compliance issues with this sleeping arrangement.',
        discussion: 'Multiple violations exist. First, space and occupancy: a shared bedroom needs at least 60 square feet per occupant AND no more than four occupants (§748.3357(b)). Five children would need 300 square feet and exceed the four-occupant limit; a 180-square-foot room supports at most three occupants. Second, a child six or older must not share a bedroom with a child of the opposite gender unless they are siblings (or another §748.3363 exception applies), so the 7-year-old girl cannot share with the boys. Move her and reduce the occupancy of the room.',
        keyTakeaway: 'Shared bedrooms require 60 sq ft per occupant and no more than 4 occupants (80 sq ft if single). Children 6 and older may not share with the opposite gender (§§748.3357, 748.3363).',
      },
    ],
    quiz: [
      {
        id: 'd748bq1',
        question: 'For a non-emergency admission to a GRO, the admission assessment must be completed:',
        options: ['Within 24 hours of admission', 'Within 72 hours of admission', 'Prior to admission', 'Within 40 days of admission'],
        correct: 2,
        explanation: 'For a non-emergency admission, the admission assessment must be completed PRIOR TO admission. For emergency admissions, all requirements must be completed within 40 days.',
      },
      {
        id: 'd748bq2',
        question: 'A dental appointment for a newly admitted child must be scheduled within:',
        options: ['7 days of admission', '14 days of admission', '30 days of admission', '90 days of admission'],
        correct: 2,
        explanation: 'The dental appointment must be SCHEDULED within 30 days of admission. The actual dental exam must be COMPLETED within 90 days of admission.',
      },
      {
        id: 'd748bq3',
        question: 'The minimum floor space required per occupant in a shared GRO bedroom is:',
        options: ['40 square feet', '50 square feet', '60 square feet', '80 square feet'],
        correct: 2,
        explanation: 'Under §748.3357(b), a shared bedroom needs at least 60 square feet per occupant and no more than four occupants. A single-occupancy bedroom needs 80 square feet. (40 square feet per child is the indoor activity space requirement, §748.3351.)',
      },
      {
        id: 'd748bq4',
        question: 'The minimum toilet-to-child ratio required in a GRO is:',
        options: ['1 toilet per 4 children', '1 toilet per 6 children', '1 toilet per 8 children', '1 toilet per 10 children'],
        correct: 2,
        explanation: 'Chapter 748 requires at least 1 toilet and 1 hand-washing sink for every 8 children, and 1 bathtub or shower for every 8 females and every 8 males (§§748.3393–.3397).',
      },
      {
        id: 'd748bq5',
        question: 'What is the minimum age of a driver who transports children for a GRO (apart from the narrow child-in-care exception)?',
        options: ['18', '19', '21', '25'],
        correct: 2,
        explanation: '§748.4003(1)(A) requires each driver to be at least 21 years old.',
      },
    ],
  },
  {
    id: 'domain-748c',
    number: 10,
    title: 'Ch. 748 — Behavior Intervention, Restraints & Normalcy',
    icon: 'ri-mental-health-line',
    summary: 'Emergency Behavior Intervention (EBI), restraint requirements, prohibited techniques, normalcy activities, and the Reasonable and Prudent Parent Standard under Chapter 748.',
    sections: [
      {
        heading: 'Emergency Behavior Intervention (EBI) — Chapter 748',
        body: `EBI refers to the use of physical restraint or seclusion to manage a child's dangerous behavior. Chapter 748 has strict rules about when and how EBI may be used.\n\n**When EBI May Be Used:**\n• ONLY when the child's behavior poses an immediate danger to themselves or others\n• ONLY after less restrictive interventions have been attempted or are not feasible\n• ONLY by staff trained in the specific EBI technique being used\n• NEVER as punishment, discipline, or for staff convenience\n\n**Types of EBI:**\n• Personal restraint (physical holding) — most common\n• Mechanical restraint — only at a Residential Treatment Center; chemical restraint is never allowed (§748.2451)\n• Seclusion — only for a child with an emotional disorder or autism spectrum disorder at an operation serving 25+ such children (or >30% of its population), or at emergency care services only while waiting for law enforcement/EMS (§748.2451(a)(4))\n\n**EBI Requirements:**\n• Must be the least restrictive intervention that will protect the child\n• Must be discontinued as soon as the danger has passed\n• A caregiver qualified in EBI must monitor the child's breathing and signs of distress during a personal restraint (§748.2601)\n• Documented in the child's record as soon as possible, no later than 24 hours (§748.2855; not required for short personal restraints)\n• Written notice to the parent as soon as possible, no later than 72 hours (§748.2857)\n• Notification to Licensing: if injury occurs, follow serious incident reporting requirements\n\n**Post-EBI Requirements:**\n• Observe the child at least 15 minutes and offer a private discussion as soon as possible, no later than 48 hours (§748.2851(a))\n• Caregivers debrief each other ASAP; supervisor reviews the use within 72 hours (§748.2851(c)-(d))\n• Time limits (§748.2801): short personal restraint 1 minute; personal restraint 30 minutes; seclusion 1 hour (under 9) / 2 hours (9+); mechanical restraint 30 minutes (under 9) / 1 hour (9+)\n• Triggered review within 30 days (§748.2903) after, e.g., 4 personal restraints in 7 days, more than 12 in 30 days, or 3 seclusions in 7 days (§748.2901)`,
      },
      {
        heading: 'Absolutely Prohibited Techniques — Chapter 748',
        body: `The following techniques are ABSOLUTELY PROHIBITED under Chapter 748 and may NEVER be used on any child under any circumstances. These are all High Weight violations.\n\n**Prohibited at ALL times (§748.1119):**\n• Chemical restraints (also §748.2451(b))\n• Aversive conditioning — any technique designed to or likely to cause physical pain, startling stimuli, or noxious stimuli/toxic sprays near the child's face\n• Pressure points\n• Rebirthing therapy\n• Hug/holding therapy\n• Taser or stun guns\n\n**Prohibited personal restraint techniques (§748.2605(a)):** restraints that impair breathing by pressure on the torso; obstruct the airway (anything in, on, or over mouth, nose, or neck); obstruct the caregiver's view of the face; interfere with the child's ability to communicate distress; twist or place limbs behind the back. Prone/supine restraint is allowed only as a transitional hold of no more than one minute, as a last resort, with a trained observer (§748.2605(b)).\n\n**Prohibited Discipline Techniques (§748.2307):**\n• Corporal punishment — spanking, hitting, slapping, pinching\n• Shaking a child\n• Unproductive work, forced exercise (e.g., running laps), or holding a position as punishment — corporal punishment [High] (§748.2303)\n• Denying food, sleep, bathroom access, mail, or family visits as punishment\n• Remarks that belittle, ridicule, or demean the child or their family\n• Threatening loss of placement\n• Demeaning behavior intended to embarrass, control, harm, or isolate\n• Requiring a child to maintain a physical position for extended periods`,
      },
      {
        heading: 'Normalcy & the Reasonable and Prudent Parent Standard',
        body: `Chapter 748 requires GROs to support children's participation in normal childhood activities — this is called the "normalcy" requirement.\n\n**The Reasonable and Prudent Parent Standard (RPPS):**\n• The standard a caregiver must apply when making decisions about a child's participation in activities\n• Asks: "Would a reasonable and prudent parent allow this activity for a child of this age and maturity?"\n• Considers: the child's age, maturity, developmental level, and any known risks\n• The goal is to allow children to have normal childhood experiences — not to restrict all risk\n\n**Designated Person for Childhood Activities:**\n• Each GRO must designate a person with authority to approve childhood activities\n• This person must be identified in the service plan\n• This person applies the RPPS when making decisions\n\n**Examples of Normalcy Activities:**\n• Participating in school sports, clubs, and extracurricular activities\n• Attending sleepovers at friends' homes\n• Getting a driver's license (age-appropriate)\n• Having a part-time job\n• Attending prom, homecoming, and other school events\n• Participating in community activities\n\n**Normalcy Requirements in Service Plans:**\n• Initial service plan must include plans for normalcy activities\n• Service plan must identify who is responsible for approving activities\n• Children must be encouraged to participate in age-appropriate activities\n• Restrictions on normalcy activities must be documented and justified`,
      },
      {
        heading: 'Independent Living & Transition Planning — Chapter 748',
        body: `Chapter 748 requires GROs to prepare older youth for independence. These requirements are heavily tested on the LCCA exam.\n\n**Age-Based Requirements in Service Plans:**\n• Children 13+: Service plan must address healthy relationships, personal boundaries, STDs, and reproduction\n• Children 14+: Life skills training must begin — grocery shopping, cooking, transportation, money management, banking\n• Children 16+: Preparation for independent living and employment must be addressed\n\n**Transition-related service plan content:**\n• Child has a right to a comprehensive service plan that includes transitional and discharge planning (§748.1101(b)(5)(A))\n• In a transitional living program, plans must include assisting the child in obtaining a Social Security number, birth certificate, and driver's license or DPS ID as needed, plus money management and opening a bank account (§748.1337(b)(4))`,
      },
      {
        heading: 'Seclusion Requirements — Chapter 748',
        body: `Seclusion is the involuntary confinement of a child alone in a room or area from which the child is physically prevented from leaving. Chapter 748 has strict requirements.\n\n**When Seclusion May Be Used:**\n• ONLY when the child's behavior poses an immediate danger to themselves or others\n• ONLY at operations authorized under §748.2451(a)(4); written orders from a licensed psychiatrist, psychologist, or physician are required except for emergency care services (§748.2501)\n• NEVER as punishment or for staff convenience\n\n**Seclusion Requirements:**\n• Caregivers must continuously observe the child (window or one-way mirror; video cannot replace direct observation) (§748.2651(a))\n• Maximum time: under age 9 — 1 hour; age 9+ — 2 hours; time is cumulative if the child is re-secluded within 12 hours (§§748.2801, .2803)\n• Documentation within 24 hours (§748.2855); written notice to the parent within 72 hours (§748.2857)\n\n**Seclusion Room Requirements (§748.2651(b)):**\n• Protected, private, observable; at least 40 square feet of floor space and an 8-foot ceiling\n• Free of hazards; adequately ventilated, heated, and lighted\n• Mat and bedding unless ordered otherwise`,
      },
    ],
    scenarios: [
      {
        id: 'd748cs1',
        title: 'The Restraint Situation',
        situation: 'A 13-year-old boy in your GRO becomes extremely agitated during a group session and begins throwing chairs. A caregiver attempts verbal de-escalation but the boy picks up a chair and appears about to throw it at another child. The caregiver initiates a personal restraint. The restraint lasts 8 minutes until the boy calms down. There is one other staff member present.',
        question: 'Was this EBI appropriate, and what must happen in the next 24 hours?',
        discussion: 'The EBI appears justified — the child\'s behavior posed an immediate danger to others, verbal de-escalation was attempted first, and a second staff member was present. The restraint was discontinued when the danger passed. Now, within 24 hours: (1) Document the EBI in detail — what triggered it, what de-escalation was attempted, how the restraint was applied, duration, who was present, and the child\'s condition throughout. (2) Send written notice to the parent as soon as possible, no later than 72 hours (§748.2857). (3) Observe the child at least 15 minutes and offer a private discussion as soon as possible, no later than 48 hours (§748.2851(a)). (4) Caregivers debrief each other as soon as possible, and the supervisor reviews the intervention within 72 hours. (5) Track triggered-review thresholds (§748.2901). If any injury occurred, follow serious incident reporting requirements.',
        keyTakeaway: 'EBI must be documented within 24 hours, the parent given written notice within 72 hours, the child offered a private discussion within 48 hours, and the supervisor must review within 72 hours.',
      },
      {
        id: 'd748cs2',
        title: 'The Sleepover Request',
        situation: 'A 15-year-old girl in your GRO has been doing well for 3 months. Her school friend invites her to a sleepover at the friend\'s home this Friday. The girl asks you if she can go. The friend\'s parents are known to the caseworker and have no concerning history. The girl\'s service plan does not specifically address sleepovers.',
        question: 'How do you apply the Reasonable and Prudent Parent Standard to this request?',
        discussion: 'This is exactly what the RPPS is designed for. Ask yourself: would a reasonable and prudent parent allow a 15-year-old who has been doing well to attend a sleepover at a known family\'s home? Almost certainly yes. The RPPS is designed to support normal childhood experiences, not restrict them. You should: (1) Verify the friend\'s family through the caseworker if not already done. (2) Ensure the girl has emergency contact information. (3) Confirm she knows how to reach you if needed. (4) Document the decision and your reasoning. (5) Notify the caseworker. The goal is to say YES to normal activities whenever it is safe to do so — not to restrict everything out of excessive caution.',
        keyTakeaway: 'The RPPS asks what a reasonable parent would allow. The goal is to support normal childhood experiences, not restrict them. Document your decision and reasoning.',
      },
    ],
    quiz: [
      {
        id: 'd748cq1',
        question: 'Emergency Behavior Intervention (EBI) may ONLY be used when:',
        options: ['A child is being disruptive in class', 'A child\'s behavior poses an immediate danger to themselves or others', 'A child refuses to follow instructions', 'Staff need to move a child to a different location'],
        correct: 1,
        explanation: 'EBI may only be used when a child\'s behavior poses an immediate danger to themselves or others, and only after less restrictive interventions have been attempted or are not feasible.',
      },
      {
        id: 'd748cq2',
        question: 'EBI must be documented within:',
        options: ['1 hour', '4 hours', '24 hours', '48 hours'],
        correct: 2,
        explanation: 'EBI must be documented in the child\'s record as soon as possible but no later than 24 hours after it begins (§748.2855). The parent must receive written notice no later than 72 hours after (§748.2857).',
      },
      {
        id: 'd748cq3',
        question: 'Which of the following is ABSOLUTELY PROHIBITED under Chapter 748 and may never be used on any child?',
        options: ['Brief personal restraint during a safety emergency', 'Pressure points', 'Verbal redirection', 'Temporary seclusion for children over 6'],
        correct: 1,
        explanation: 'Pressure points are absolutely prohibited under §748.1119 and may never be used on any child under any circumstances. This is a High Weight violation.',
      },
      {
        id: 'd748cq4',
        question: 'The Reasonable and Prudent Parent Standard (RPPS) asks:',
        options: ['What the child\'s biological parents would allow', 'What a reasonable and prudent parent would allow for a child of this age and maturity', 'What the caseworker recommends', 'What the minimum standards require'],
        correct: 1,
        explanation: 'The RPPS asks what a reasonable and prudent parent would allow for a child of this age and maturity. It is designed to support normal childhood experiences, not restrict them.',
      },
      {
        id: 'd748cq5',
        question: 'Life skills training (grocery shopping, cooking, money management) must begin for children at age:',
        options: ['12', '13', '14', '16'],
        correct: 2,
        explanation: 'Under Chapter 748, life skills training must begin for children age 14 and older. This includes grocery shopping, cooking, transportation, money management, and banking.',
      },
    ],
  },
  {
    id: 'domain-748d',
    number: 11,
    title: 'Ch. 748 — Discharge, Records & Operation Requirements',
    icon: 'ri-file-list-3-line',
    summary: 'Discharge planning, record retention, operation policies, notification requirements, and the full scope of administrator responsibilities under Chapter 748.',
    sections: [
      {
        heading: 'Discharge Planning & Requirements — Chapter 748',
        body: `Discharge from a GRO requires careful planning and documentation.\n\n**Planning (§748.1433):** involve at least one current caregiver and one professional level service provider; invite the child, parents, and others pertinent; inform the child at least 4 days before a non-emergency discharge or transfer unless a written justification is in the record.\n\n**Documentation (§748.1437):** date and circumstances, when the child was informed, person discharged to, service plans for the past 12 months, medication list, and any treatment in progress.\n\n**Information to next placement (§748.1439):** obtain consent to release; if obtained, provide within 15 days of discharge a written discharge summary, progress notes for the past 60 days, unresolved incidents/investigations, and assessments/evaluations.\n\n**Other:**\n• An employee must accompany a child who is an immediate danger to self/others (§748.1435)\n• Release a child only to a parent, a parent's designee, law enforcement, or a person authorized by law (§748.1481)\n• If a child leaves without authorization, follow unauthorized absence reporting requirements`,
      },
      {
        heading: 'Record Retention Requirements — Chapter 748',
        body: `Chapter 748 specifies exactly how long different types of records must be kept. These are heavily tested.\n\n**Child Records:**\n• Must be retained for 2 YEARS after the child's discharge (or until any investigation involving the child is resolved, whichever is longer)\n• Must include: admission assessment, service plans, medical records, incident reports, medication records, educational records, discharge summary\n\n**Personnel Records:**\n• Must be retained for 1 YEAR after the employee's last day of employment (or until any investigation is resolved, whichever is longer)\n\n**Incident Reports:**\n• Must be kept on file for 2 YEARS\n\n**Unauthorized Absence Records:**\n• Annual summary log: 5 YEARS\n• Overall operation evaluation: 5 YEARS\n\n**Medication Records:**\n• Must be retained for 2 YEARS after the child's discharge\n\n**Policies and Procedures:**\n• Copies of all current and previous policies must be kept for at least 2 YEARS (§748.341(b))\n\n**Key Comparison Table:**\n| Record Type | Retention Period |\n|---|---|\n| Child records | 2 years after discharge |\n| Personnel records | 1 year after separation |\n| Incident reports | 2 years |\n| Unauthorized absence logs | 5 years |\n| Policies and procedures | 2 years |`,
      },
      {
        heading: 'Operation Policies & Notification Requirements',
        body: `Chapter 748 requires GROs to maintain written policies and notify Licensing of specific changes.\n\n**Required Written Policies:**\n• Admission and discharge procedures\n• Service planning procedures\n• Behavior management and EBI procedures\n• Medication administration procedures\n• Serious incident reporting procedures\n• Unauthorized absence procedures\n• Transportation procedures\n• Normalcy and RPPS procedures\n• Grievance procedures for children and families\n\n**Notification Requirements to Licensing:**\n• At least 30 days before: change of legal structure/governing body, relocation, or change of operating hours\n• At least 15 days before: changes to policies required by §748.103(b), changes to the floor plan, or starting pool construction\n• No later than 2 days after: change or vacancy of the child-care administrator, or a change in a controlling person (§748.153)\n• Serious incidents: per §748.303 timelines\n\n**Grievance Procedures:**\n• A child grievance procedure is a required policy (§748.111(12)) and is covered in the child's orientation (§748.1209)\n\n**Posting Requirements (§748.191):**\n• Permit (at the main office for cottage homes)\n• Licensing notice "Keeping Children Safe"\n• Emergency and evacuation/relocation plans in each building and living quarters`,
      },
      {
        heading: 'Governing Body & Administrator Responsibilities',
        body: `Chapter 748 defines the responsibilities of both the governing body and the administrator.\n\n**Governing Body Responsibilities:**\n• Establish and maintain written policies\n• Ensure the operation is financially stable\n• Hire and evaluate the administrator\n• Ensure compliance with all applicable laws and regulations\n• Maintain liability insurance\n\n**Administrator Responsibilities (§748.535):**\n• Daily supervision and on-site administrative responsibility\n• Oversee staffing patterns to ensure adequate supervision\n• Maintain a system for emergency coverage\n• Ensure no child is used as a caregiver\n• Ensure persons with dangerous behavior or health conditions are not at the operation\n• Ensure all required training is completed\n• Ensure all required records are maintained\n• Ensure all required notifications are made\n• Ensure the physical environment meets standards\n\n**Two-Operation Rule:**\n• An administrator CAN serve two residential operations if:\n  - Both operations are in good standing\n  - The staffing plans show the size is manageable and the administrator splits a full-time schedule (§748.531(b))\n  - For CPAs: manages no more than 25 foster homes and the administrator also holds a CPA Administrator License\n  - GROs/RTCs are contiguous (a CPA does not have to be contiguous) (§748.533)\n• A holder of a PROVISIONAL child-care administrator's license may only serve ONE operation (§748.533(c))\n\n**Provisional Child-Care Administrator's License:**\n• May serve as administrator of a GRO only if, when hired, the operation is not on a voluntary plan of action, corrective action, or adverse action (or pending due process) (§748.532)\n• May serve only ONE residential operation (§748.533(c))`,
      },
      {
        heading: "Children's Rights — Full List Under Chapter 748",
        body: `Chapter 748 provides an extensive list of rights for children in GRO care. These are tested on the LCCA exam.\n\n**Basic Rights (every child has these):**\n• Right to be treated with dignity and respect\n• Right to be free from abuse, neglect, and exploitation\n• Right to appropriate medical, dental, and mental health care\n• Right to an education\n• Right to communicate with family members (unless restricted for safety)\n• Right to send and receive mail (cannot be opened without assistance need)\n• Right to make and receive phone calls (cannot be screened without assistance need)\n• Right to practice their religion\n• Right to keep personal belongings\n• Right to privacy in personal matters\n• Right to participate in age-appropriate activities (normalcy)\n• Right to file a grievance without retaliation\n\n**Privacy Rights:**\n• Mail may not be opened or read without the child's consent (unless the child needs assistance)\n• Phone calls may not be monitored without the child's consent (unless the child needs assistance)\n• Mail/call restrictions continuing more than 30 DAYS must be re-evaluated MONTHLY by PLSP\n• Sibling contact restrictions must be re-evaluated every 60 DAYS\n\n**Search Rights:**\n• Staff may search a child's belongings with REASONABLE SUSPICION\n• RTCs and emergency care programs may conduct ROUTINE searches\n• Clothing removal searches: same-gender caregiver only; second caregiver must witness\n• Body cavity searches: PROHIBITED except for the mouth\n• Searches must be documented`,
      },
    ],
    scenarios: [
      {
        id: 'd748ds1',
        title: 'The Discharge Checklist',
        situation: 'A 17-year-old boy is being discharged from your GRO after 14 months in care. He is aging out and will be living independently. His caseworker calls to confirm the discharge date. You have 3 days until discharge.',
        question: 'What must you ensure is completed before and at discharge?',
        discussion: 'This is a transition-age youth discharge. Involve a current caregiver and the professional level service provider in discharge planning and invite the child and parents (§748.1433). The child must be told at least 4 days before a non-emergency discharge unless a written justification is in the record, so with 3 days left you must either document that justification or move the date. Document the discharge items in §748.1437, confirm the transition-age service plan items are addressed (life skills at 14+, independent living preparation at 16+, §748.1337(b)(1)(F)-(G)), and provide the discharge summary, 60 days of progress notes, unresolved incidents, and assessments to the next placement within 15 days if consent to release is obtained (§748.1439).',
        keyTakeaway: 'Non-emergency discharge requires caregiver/PLSP planning, the child informed at least 4 days ahead, required documentation, and information to the next placement within 15 days.',
      },
      {
        id: 'd748ds2',
        title: 'The Policy Change',
        situation: 'Your governing body has decided to change your behavior management policy to allow a new type of de-escalation technique. The board wants to implement the change starting next Monday — 5 days from now.',
        question: 'What is the regulatory problem with this timeline?',
        discussion: 'Chapter 748 requires that Licensing be notified at least 15 days before any policy change takes effect. A 5-day timeline violates this requirement. You must notify Licensing immediately and delay the implementation until at least 15 days after notification. Additionally, any new technique must comply with Chapter 748\'s EBI requirements — it cannot be a prohibited technique. Staff must be trained on the new technique before it is implemented. Document the notification to Licensing and the revised implementation date.',
        keyTakeaway: 'Policy changes require at least 15 days advance notice to Licensing. A 5-day timeline is a violation. Delay implementation and notify Licensing immediately.',
      },
    ],
    quiz: [
      {
        id: 'd748dq1',
        question: 'Child records must be retained for how long after a child\'s discharge from a GRO?',
        options: ['1 year', '2 years', '3 years', '5 years'],
        correct: 1,
        explanation: 'Under Chapter 748, child records must be retained for 2 years after the child\'s discharge, or until any investigation involving the child is resolved, whichever is longer.',
      },
      {
        id: 'd748dq2',
        question: 'Unauthorized absence annual summary logs must be retained for:',
        options: ['1 year', '2 years', '3 years', '5 years'],
        correct: 3,
        explanation: 'Under §748.453(b), the annual summary log for unauthorized absences must be retained for 5 years.',
      },
      {
        id: 'd748dq3',
        question: 'You must notify Licensing of a policy change at least how many days before it takes effect?',
        options: ['2 days', '7 days', '15 days', '30 days'],
        correct: 2,
        explanation: 'Under Chapter 748, Licensing must be notified at least 15 days before any policy change takes effect.',
      },
      {
        id: 'd748dq4',
        question: 'When a child is discharged and consent to release is obtained, what must be provided to the next placement or caregiver within 15 days?',
        options: ['Only a verbal summary', 'A written discharge summary, 60 days of progress notes, unresolved incidents/investigations, and assessments/evaluations', 'Only the medication list', 'Nothing — records must stay at the operation'],
        correct: 1,
        explanation: '§748.1439 requires these items to be provided within 15 days of discharge if consent to release is obtained.',
      },
      {
        id: 'd748dq5',
        question: 'Mail and phone call restrictions that continue for more than 30 days must be re-evaluated how often?',
        options: ['Every 2 weeks', 'Monthly', 'Every 60 days', 'Every 90 days'],
        correct: 1,
        explanation: 'Under §748.1111(d), mail and phone call restrictions that continue for more than 30 days must be re-evaluated monthly by a professional level service provider.',
      },
    ],
  },
];

export const lccaDomains: StudyDomain[] = [...lccaGroDomainsA, ...lccaGroDomainsB, ...lccaGro748Domains].sort((a, b) => a.number - b.number);
