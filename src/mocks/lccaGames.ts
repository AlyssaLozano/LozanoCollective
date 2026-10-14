// Game content for the LCCA (Licensed Child Care Administrator) track.
// Source: Texas HHSC Child Care Regulation, Minimum Standards for General Residential Operations
// (26 TAC Chapter 748), Revised 9/2026. Weights are the bracketed deficiency weights printed in that text.
import type { GameData } from './gameTypes';

export const lccaGameData: GameData = {
  // ---------------------------------------------------------------------------------------------
  // Deadline Dash
  // ---------------------------------------------------------------------------------------------
  deadlines: [
    { id: 'd1', prompt: 'A preliminary service plan addressing a child\'s immediate needs is due within:', answer: '72 hours', distractors: ['24 hours', '48 hours', '7 days'], cite: '§748.1331' },
    { id: 'd2', prompt: 'An initial service plan must be completed within ___ after you admit the child:', answer: '45 days', distractors: ['30 days', '60 days', '90 days'], cite: '§748.1335' },
    { id: 'd3', prompt: 'For a child receiving only child-care services, the service plan must be reviewed and updated at least every:', answer: '180 days', distractors: ['30 days', '60 days', '365 days'], cite: '§748.1381' },
    { id: 'd4', prompt: 'For a child receiving treatment services for an emotional disorder, the service plan must be reviewed and updated at least every:', answer: '90 days', distractors: ['30 days', '60 days', '120 days'], cite: '§748.1381' },
    { id: 'd5', prompt: 'During waking hours, with no child needing treatment services, one caregiver may care for:', answer: '1:8', distractors: ['1:5', '1:10', '1:12'], cite: '§748.1003' },
    { id: 'd6', prompt: 'During waking hours, if at least one child in the group requires treatment services, the ratio is:', answer: '1:5', distractors: ['1:3', '1:8', '1:10'], cite: '§748.1003' },
    { id: 'd7', prompt: 'At night, an AWAKE caregiver with no child needing treatment services may care for:', answer: '1:24', distractors: ['1:12', '1:16', '1:30'], cite: '§748.1007' },
    { id: 'd8', prompt: 'At night, a SLEEPING caregiver with at least one child needing treatment services may care for:', answer: '1:10', distractors: ['1:5', '1:15', '1:16'], cite: '§748.1007' },
    { id: 'd9', prompt: 'The cumulative medication record must be updated (non-cottage-home operation) within ___ of giving a medication:', answer: '2 hours', distractors: ['30 minutes', '6 hours', '12 hours'], cite: '§748.2151' },
    { id: 'd10', prompt: 'When a child dies in your care, law enforcement must be notified immediately, but no later than:', answer: '1 hour', distractors: ['30 minutes', '2 hours', '24 hours'], cite: '§748.303' },
    { id: 'd11', prompt: 'When a child dies in your care, Licensing and the parents must be notified no later than ___ after the death:', answer: '2 hours', distractors: ['1 hour', '6 hours', '24 hours'], cite: '§748.303' },
    { id: 'd12', prompt: 'A substantial physical injury or critical illness must be reported to Licensing no later than ___ after the incident:', answer: '24 hours', distractors: ['1 hour', '2 hours', '72 hours'], cite: '§748.303' },
    { id: 'd13', prompt: 'A missing child aged 13 or older (no trafficking or abduction concern) must be reported no later than ___ after the absence is discovered:', answer: '6 hours', distractors: ['2 hours', '12 hours', '24 hours'], cite: '§748.303' },
    { id: 'd14', prompt: 'A child returning from an unauthorized absence must be debriefed as soon as possible, but no later than:', answer: '24 hours', distractors: ['2 hours', '48 hours', '7 days'], cite: '§748.455' },
    { id: 'd15', prompt: 'A triggered review after a child\'s third unauthorized absence in 60 days must happen no later than ___ after the third absence:', answer: '30 days', distractors: ['7 days', '14 days', '60 days'], cite: '§748.457' },
    { id: 'd16', prompt: 'The annual summary log of unauthorized absences must be kept for:', answer: '5 years', distractors: ['1 year', '2 years', '10 years'], cite: '§748.453' },
    { id: 'd17', prompt: 'A child\'s complete record is kept for at least ___ after the date of discharge (or until any investigation is resolved):', answer: '2 years', distractors: ['6 months', '1 year', '5 years'], cite: '§748.433' },
    { id: 'd18', prompt: 'Personnel records (other than training records) are kept for at least ___ after an employee\'s last day:', answer: '1 year', distractors: ['6 months', '3 years', '7 years'], cite: '§748.431' },
    { id: 'd19', prompt: 'With no back-up administrator, how long do you have after the administrator position becomes vacant to obtain a licensed administrator before you can be cited?', answer: '60 days', distractors: ['14 days', '30 days', '120 days'], cite: '§748.154' },
    { id: 'd20', prompt: 'You must notify Licensing in writing that your administrator changed or the position is vacant no later than:', answer: '2 days', distractors: ['24 hours', '5 days', '30 days'], cite: '§748.153' },
    { id: 'd21', prompt: 'The maximum length of a personal restraint for a child of any age is:', answer: '30 minutes', distractors: ['10 minutes', '15 minutes', '1 hour'], cite: '§748.2801' },
    { id: 'd22', prompt: 'Without a continuation order, the maximum length of seclusion for a child under nine years old is:', answer: '1 hour', distractors: ['15 minutes', '30 minutes', '3 hours'], cite: '§748.2801' },
    { id: 'd23', prompt: 'Even with a continuation order, seclusion or mechanical restraint may never exceed:', answer: '4 hours', distractors: ['2 hours', '6 hours', '12 hours'], cite: '§748.2805' },
    { id: 'd24', prompt: 'A prone or supine personal restraint used as a transitional hold may not exceed:', answer: '1 minute', distractors: ['30 seconds', '5 minutes', '15 minutes'], cite: '§748.2801' },
    { id: 'd25', prompt: 'The caregiver must document an emergency behavior intervention in the child\'s record no later than ___ after it began:', answer: '24 hours', distractors: ['1 hour', '48 hours', '7 days'], cite: '§748.2855' },
    { id: 'd26', prompt: 'Written notice to the parent about an emergency behavior intervention (other than a short personal restraint) is due no later than:', answer: '72 hours', distractors: ['12 hours', '24 hours', '5 days'], cite: '§748.2857' },
    { id: 'd27', prompt: 'After release from an emergency behavior intervention, the child must have a chance to discuss it in private no later than:', answer: '48 hours', distractors: ['6 hours', '12 hours', '5 days'], cite: '§748.2851' },
    { id: 'd28', prompt: 'A newly admitted child needs a medical examination within ___ after admission (unless one occurred in the past year):', answer: '30 days', distractors: ['7 days', '14 days', '60 days'], cite: '§748.1223' },
    { id: 'd29', prompt: 'A newly admitted child aged three or older must have a dental examination within ___ after admission (unless one occurred in the past year):', answer: '90 days', distractors: ['30 days', '60 days', '180 days'], cite: '§748.1225' },
    { id: 'd30', prompt: 'For an emergency admission, the full admission assessment must be completed within:', answer: '40 days', distractors: ['14 days', '25 days', '60 days'], cite: '§748.1269' },
    { id: 'd31', prompt: 'An operation licensed for emergency care services may temporarily exceed its capacity for no more than:', answer: '48 hours', distractors: ['12 hours', '24 hours', '7 days'], cite: '§748.155' },
    { id: 'd32', prompt: 'A caregiver at an operation where 30% or more of children receive treatment services needs this many annual training hours:', answer: '50 hours', distractors: ['24 hours', '30 hours', '40 hours'], cite: '§748.930' },
    { id: 'd33', prompt: 'At an operation where children receive treatment services, caregivers must repeat emergency behavior intervention training every:', answer: '6 months', distractors: ['3 months', '9 months', '24 months'], cite: '§748.936' },
    { id: 'd34', prompt: 'A caregiver must be certified in first aid within ___ of employment:', answer: '90 days', distractors: ['10 days', '30 days', '180 days'], cite: '§748.911' },
    { id: 'd35', prompt: 'A fire inspection is required at least once every:', answer: '12 months', distractors: ['3 months', '6 months', '36 months'], cite: '§748.3101' },
    { id: 'd36', prompt: 'Your operation must be inspected for gas leaks at least once every:', answer: '24 months', distractors: ['6 months', '18 months', '5 years'], cite: '§748.3061' },
    { id: 'd37', prompt: 'During a fire drill, children must be able to safely exit to the designated meeting place within:', answer: '3 minutes', distractors: ['1 minute', '5 minutes', '10 minutes'], cite: '§748.3239' },
    { id: 'd38', prompt: 'Hot water accessible to children may be no hotter than:', answer: '120°F', distractors: ['100°F', '110°F', '135°F'], cite: '§748.3315' },
    { id: 'd39', prompt: 'A child may stay in respite child-care for no more than ___ consecutive days:', answer: '14 days', distractors: ['3 days', '7 days', '30 days'], cite: '§748.4267' },
    { id: 'd40', prompt: 'A content, responsive infant may remain in the crib after awakening for up to:', answer: '30 minutes', distractors: ['5 minutes', '10 minutes', '60 minutes'], cite: '§748.1761' },
  ],

  // ---------------------------------------------------------------------------------------------
  // Citation Court
  // ---------------------------------------------------------------------------------------------
  citations: [
    // ---- High
    { id: 'c1', scenario: 'A caregiver made a 10-year-old do twenty push-ups on the porch after he talked back at dinner.', weight: 'High', why: 'Corporal punishment, including forcing a child to do physical exercise to control behavior, may not be used or threatened.', cite: '§748.2303' },
    { id: 'c2', scenario: 'An inspector finds children\'s prescription medication in an unlocked desk drawer in the cottage office.', weight: 'High', why: 'All medication must be stored in a locked container and be inaccessible except to employees responsible for it.', cite: '§748.2101' },
    { id: 'c3', scenario: 'The hot water at a bathroom sink the children use measures 138 degrees Fahrenheit.', weight: 'High', why: 'A thermostat must keep hot water accessible to children no higher than 120 degrees Fahrenheit.', cite: '§748.3315' },
    { id: 'c4', scenario: 'A day caregiver keeps a handgun in her purse in the staff break room on campus.', weight: 'High', why: 'An employee, contract service provider, or volunteer may not possess a handgun while at the operation or caring for children.', cite: '§748.511' },
    { id: 'c5', scenario: 'In the teen-parenting program, a caregiver laid a swaddled infant down for a nap; there is no health-care professional\'s order in the infant\'s record.', weight: 'High', why: 'A swaddled infant may not be laid down to sleep or rest without a signed order from a health-care professional.', cite: '§748.1767' },
    { id: 'c6', scenario: 'Records show a child was held in a prone restraint as a "transitional hold" for four minutes before being moved to a seated hold.', weight: 'High', why: 'A prone or supine personal restraint used as a transitional hold may not last longer than one minute.', cite: '§748.2801' },
    { id: 'c7', scenario: 'A child with a deep cut was kept in the cottage for two hours while the caregiver waited for the supervisor to approve calling emergency services.', weight: 'High', why: 'A caregiver must immediately get the child treated or call emergency services and must not be required to seek approval first.', cite: '§748.1553' },

    // ---- Medium-High
    { id: 'c8', scenario: 'A caregiver released a child to a man who said he was the child\'s uncle without verifying his identity or logging who picked the child up.', weight: 'Medium-High', why: 'Caregivers must follow release policies, verify the identity of unfamiliar pick-up persons, and record that identity.', cite: '§748.1481' },
    { id: 'c9', scenario: 'A caregiver gave a child a double dose of medication on Tuesday; the error was not written up until the following Monday.', weight: 'Medium-High', why: 'Every medication error must be documented within 24 hours, including the call to the health-care professional and their recommendations.', cite: '§748.2203' },
    { id: 'c10', scenario: 'The most recent fire inspection report in the administrator\'s binder is dated 15 months ago.', weight: 'Medium-High', why: 'A fire inspection must occur at least once every 12 months from the date of the last one.', cite: '§748.3101' },
    { id: 'c11', scenario: 'One caregiver is alone with 11 school-age children, none of whom receive treatment services, during after-school hours.', weight: 'Medium-High', why: 'One caregiver may supervise no more than eight children in waking hours when no child requires treatment services (five if any does).', cite: '§748.1003' },
    { id: 'c12', scenario: 'A youth returned Friday from an unauthorized absence; the first debriefing documented in her record took place the following Tuesday.', weight: 'Medium-High', why: 'The child must be debriefed as soon as possible, but no later than 24 hours after returning.', cite: '§748.455' },
    { id: 'c13', scenario: 'A cottage with a gas furnace and gas range has no operable carbon monoxide detector.', weight: 'Medium-High', why: 'An operation with gas appliances must have an operable carbon monoxide detector system.', cite: '§748.3191' },
    { id: 'c14', scenario: 'A content infant was left in a crib for 45 minutes after waking up while staff finished paperwork.', weight: 'Medium-High', why: 'An infant may remain in the crib for up to 30 minutes after awakening, and only if content and responsive.', cite: '§748.1761' },
    { id: 'c15', scenario: 'A staff member was vaping in the cottage living room while children watched television.', weight: 'Medium-High', why: 'An adult may not smoke tobacco products, e-cigarettes, or vaporizers inside any building where children are present.', cite: '§748.1661' },

    // ---- Medium
    { id: 'c16', scenario: 'A caregiver hired three months ago has no tuberculosis screening documented in his personnel file.', weight: 'Medium', why: 'Each employee must have a record of a TB screening showing he is free of contagious TB.', cite: '§748.505' },
    { id: 'c17', scenario: 'The last unannounced fire drill was practiced nine months ago.', weight: 'Medium', why: 'An unannounced fire drill must be practiced at least once every six months.', cite: '§748.3239' },
    { id: 'c18', scenario: 'The tags on the kitchen fire extinguishers show their last licensed inspection was 20 months ago.', weight: 'Medium', why: 'A company licensed by the State Fire Marshal must inspect each fire extinguisher at least annually.', cite: '§748.3117' },
    { id: 'c19', scenario: 'After a 10-minute personal restraint on Monday, the written notice to the child\'s parent was not sent until the next Monday.', weight: 'Medium', why: 'Written notice of an emergency behavior intervention is due to the parent as soon as possible and no later than 72 hours after it began.', cite: '§748.2857' },
    { id: 'c20', scenario: 'A written serious incident report is missing the treating health-care professional\'s findings and how the incident was resolved.', weight: 'Medium', why: 'A serious incident report must include all required details, including treatment findings and the resolution of the incident.', cite: '§748.311' },
    { id: 'c21', scenario: 'A new cook started work, with daily contact with children, before receiving any orientation.', weight: 'Medium', why: 'Each caregiver or employee must complete orientation before beginning job duties or having contact with children.', cite: '§748.831' },
    { id: 'c22', scenario: 'As punishment for breaking curfew, a caregiver told a girl she could not have phone calls or visits with her mother for a week.', weight: 'Medium', why: 'Denial of mail or visits with family may not be used as discipline or punishment.', cite: '§748.2307' },
    { id: 'c23', scenario: 'After a child was hospitalized, the administrator emailed her Licensing representative instead of reporting the serious incident to the abuse hotline.', weight: 'Medium', why: 'All serious incident reports must be made directly to the Texas Abuse and Neglect Hotline.', cite: '§748.309' },

    // ---- Medium-Low
    { id: 'c24', scenario: 'A child admitted 62 days ago has only a preliminary service plan; no initial service plan has been completed.', weight: 'Medium-Low', why: 'The initial service plan must be completed within 45 days after admission.', cite: '§748.1335' },
    { id: 'c25', scenario: 'The operation shredded a discharged child\'s record 10 months after discharge, with no investigation pending.', weight: 'Medium-Low', why: 'A child\'s complete record must be kept for two years after discharge (or until any investigation is resolved).', cite: '§748.433' },
    { id: 'c26', scenario: 'The operation\'s permit is stored in the administrator\'s desk drawer instead of being displayed.', weight: 'Medium-Low', why: 'The permit must be posted in a prominent, publicly accessible place at the main office location.', cite: '§748.191' },
    { id: 'c27', scenario: 'A child was discharged with consent to release information, but his discharge summary reached the new caregiver 40 days later.', weight: 'Medium-Low', why: 'With consent, the discharge summary and related documents must reach the next placement within 15 days of discharge.', cite: '§748.1439' },
    { id: 'c28', scenario: 'No sanitation inspection report with the inspector\'s name and phone number can be found at the operation.', weight: 'Medium-Low', why: 'The most recent sanitation inspection report must be kept on site with the inspector\'s name and telephone number.', cite: '§748.3003' },
    { id: 'c29', scenario: 'An 8-year-old boy and an 8-year-old girl who are not siblings share a bedroom with no service planning team approval.', weight: 'Medium-Low', why: 'A child six or older may not share a bedroom with a child of the opposite gender unless a listed exception applies and the team documents approval.', cite: '§748.3363' },
    { id: 'c30', scenario: 'A video camera monitors an 11-year-old\'s bedroom at night; no parent consent or service plan justification is on file.', weight: 'Medium-Low', why: 'Video cameras may supervise older children in bedrooms only with parent consent and documented justification in the service plan.', cite: '§748.3353' },

    // ---- Low
    { id: 'c31', scenario: 'A mother received only five days\' notice of her son\'s initial service plan meeting.', weight: 'Low', why: 'A child\'s parent must have at least two weeks\' advance notice of the initial service plan meeting.', cite: '§748.1341' },
    { id: 'c32', scenario: 'Employee background check results are kept in an open binder on the front desk.', weight: 'Low', why: 'Background check results must be kept confidential and protected from unauthorized access.', cite: '§748.365' },
    { id: 'c33', scenario: 'The operation has no copy of the driver\'s license for a staff member who drives the van.', weight: 'Low', why: 'You must keep on file each driver\'s name and a copy of the driver\'s valid license.', cite: '§748.4111' },
    { id: 'c34', scenario: 'A child\'s admission assessment in the record is unsigned and undated by any professional level service provider.', weight: 'Low', why: 'A professional level service provider must sign and date each admission assessment.', cite: '§748.1215' },
    { id: 'c35', scenario: 'A 15-year-old never received a copy or summary of his initial service plan, and the record gives no reason.', weight: 'Low', why: 'A child 14 or older must be given a copy or summary of the plan unless the record documents justification for not doing so.', cite: '§748.1349' },
    { id: 'c36', scenario: 'A child was restricted to the cottage for five days; the record does not show that the child or parent was told.', weight: 'Low', why: 'You must inform the child and parent of any activity restriction and document the notice in the child\'s record.', cite: '§748.2309' },
  ],

  // ---------------------------------------------------------------------------------------------
  // Admin Shift
  // ---------------------------------------------------------------------------------------------
  shift: [
    {
      id: 's1',
      time: '7:00 AM',
      title: 'Short on the morning shift',
      situation: 'Oak Cottage has 16 children, ages 6 to 16, and none receive treatment services. Two caregivers are needed in waking hours. The night caregiver is clocking out, and the day caregiver just called in sick. Breakfast and the school bus run are in an hour, and you are standing in the doorway with a cup of coffee.',
      choices: [
        {
          text: 'Let the night caregiver go home. You, the cook, and the maintenance man will "cover" Oak Cottage with the one remaining caregiver.',
          outcome: 'The Licensing rep who happens to visit that week notes that only qualified caregivers working directly with the group count. Oak Cottage ran at 1:16 for the morning.',
          effects: { safety: -2, compliance: -3, morale: 0, budget: 1 },
        },
        {
          text: 'Ask the night caregiver to stay on overtime, and call in a qualified on-call caregiver right away to take the day slot.',
          outcome: 'Two qualified caregivers stay with the group at all times. Overtime costs money and the night caregiver is tired, but the morning runs smoothly and in ratio.',
          effects: { safety: 2, compliance: 2, morale: -1, budget: -1 },
          best: true,
        },
        {
          text: 'Pull a caregiver from Maple Cottage to help Oak. Maple will just be a little over ratio, and it averages out across campus.',
          outcome: 'Maple Cottage is now over its ratio and a child there wanders off unnoticed for ten minutes. Ratios cannot be averaged across the operation.',
          effects: { safety: -2, compliance: -2, morale: -1, budget: 1 },
        },
      ],
      lesson: 'Every group must have enough qualified caregivers working directly with it to meet its own ratio (1:8, or 1:5 if any child needs treatment services). Ratios cannot be averaged across the operation, and staff in administrative or non-caregiver roles are not counted.',
      cite: '§748.1005',
    },
    {
      id: 's2',
      time: '7:45 AM',
      title: 'Wrong pill at breakfast',
      situation: 'A caregiver finds you in the hallway, pale. During the breakfast med pass she gave Devon, age 10, the tablet that was prescribed to his roommate Marcus. Devon says he feels fine. The medication is a prescription drug.',
      choices: [
        {
          text: 'Keep a close eye on Devon today. If he shows symptoms, call someone and write it up then.',
          outcome: 'Devon gets drowsy by mid-morning. Nobody had asked a health-care professional what to watch for, and there is no record of the error.',
          effects: { safety: -3, compliance: -2, morale: 0, budget: 0 },
        },
        {
          text: 'Call Devon\'s parent and let them decide what to do. Update the medication log when the week\'s paperwork is done.',
          outcome: 'The parent is upset and suggests calling the pharmacist, which takes two hours. The log is late and incomplete.',
          effects: { safety: -2, compliance: -2, morale: -1, budget: 0 },
        },
        {
          text: 'Call a health-care professional right now, follow their recommendations, and have the caregiver document the error within 24 hours, including call times and advice.',
          outcome: 'The nurse line says to monitor and gives specific warning signs. The incident record is complete the same day, and the caregiver gets a refresher on the "five rights."',
          effects: { safety: 2, compliance: 2, morale: 0, budget: 0 },
          best: true,
        },
      ],
      lesson: 'For a prescription medication error, contact a health-care professional immediately and follow their recommendations. Document the error and the call within 24 hours.',
      cite: '§748.2203',
    },
    {
      id: 's3',
      time: '9:15 AM',
      title: 'Who can drive the van?',
      situation: 'Three children have a 10:00 dental appointment across town. The regular driver is out today. Your insured van is parked and ready. The only other staff nearby are Jada, a 20-year-old aide with a valid license, and Tyrell, a 17-year-old resident who holds a license and is covered by automobile insurance.',
      choices: [
        {
          text: 'Drive the children yourself (you are over 21, hold the right license, and the van is insured), and have your assistant cover the office.',
          outcome: 'The appointment happens on time. You lose a morning of email, but you stay within the transportation rules.',
          effects: { safety: 1, compliance: 2, morale: 0, budget: 0 },
          best: true,
        },
        {
          text: 'Send Jada. She is a responsible aide with a clean record and a valid license.',
          outcome: 'The drive goes fine, but a later review notes that every driver transporting children away from the operation must be at least 21.',
          effects: { safety: -1, compliance: -3, morale: 0, budget: 0 },
        },
        {
          text: 'Let Tyrell drive. He has a license and insurance, and it is good practice for his transition goals.',
          outcome: 'The service planning team never approved Tyrell to transport other children, so a child in care driving others is a violation.',
          effects: { safety: -2, compliance: -3, morale: 1, budget: 0 },
        },
      ],
      lesson: 'Any driver taking children away from the operation must be at least 21, covered by automobile insurance, and hold a valid license for the vehicle. A child in care may drive other children only with a license, insurance, and permission from the service planning team.',
      cite: '§748.4003',
    },
    {
      id: 's4',
      time: '10:00 AM',
      title: 'The inspector walks in',
      situation: 'A Licensing inspector arrives unannounced and asks to see active child records and the medication logs. Your records clerk is out. You also know three morning medication-log boxes from last week are missing initials.',
      choices: [
        {
          text: 'Politely ask her to come back after lunch so staff can organize the files and "get the records ready."',
          outcome: 'The inspector notes that you must allow inspection during hours of operation and make active records available for immediate review. The delay becomes its own finding.',
          effects: { safety: 0, compliance: -3, morale: -1, budget: 0 },
        },
        {
          text: 'Welcome her, give immediate access to the records and storage areas, tell her honestly about the missing initials, and ask for technical assistance.',
          outcome: 'She cites the missing documentation but notes your openness and offers technical assistance. You set up a double-check process the same day.',
          effects: { safety: 1, compliance: 2, morale: 0, budget: 0 },
          best: true,
        },
        {
          text: 'Hand over the files but quietly have the caregiver fill in the missing initials from memory before the inspector reaches the medication binder.',
          outcome: 'Back-filling creates a false record. The ink and timing give it away, and the issue is now about accuracy, not just a missed initial.',
          effects: { safety: -1, compliance: -3, morale: -1, budget: 0 },
        },
      ],
      lesson: 'You must allow Licensing to inspect during operating hours, make all active records available for immediate review, and keep records current, true, accurate, and complete.',
      cite: '§748.151',
    },
    {
      id: 's5',
      time: '11:00 AM',
      title: 'A caregiver crossed the line',
      situation: 'Eli, age 12, tells you a caregiver shook him by the shoulders and made him run laps in the gym when he refused to hand over his phone. Another child confirms it. The caregiver is on shift in the gym right now, and Eli looks shaken but not visibly hurt.',
      choices: [
        {
          text: 'Handle it internally with a written warning and retraining. You will report only if Eli turns out to have an injury.',
          outcome: 'A teacher calls the hotline two days later after Eli talks to her. Your delay becomes a second problem on top of the original conduct.',
          effects: { safety: -2, compliance: -3, morale: 0, budget: 0 },
        },
        {
          text: 'Wait until end of shift to interview everyone, then decide whether the facts justify a report.',
          outcome: 'Hours pass with the caregiver still supervising children. Conflicting stories blur the picture, and the report goes in late.',
          effects: { safety: -2, compliance: -2, morale: -1, budget: 0 },
        },
        {
          text: 'Ensure Eli\'s safety and separate the caregiver from the children, report to the Texas Abuse and Neglect Hotline as soon as you are aware, and notify Eli\'s parent immediately after he is safe.',
          outcome: 'The report is made right away, Eli feels heard, and the investigation proceeds without interference. The caregiver is upset and morale dips among colleagues.',
          effects: { safety: 2, compliance: 2, morale: -1, budget: 0 },
          best: true,
        },
      ],
      lesson: 'Corporal punishment (including forced exercise) and shaking a child are prohibited. Any allegation or indication of abuse or neglect must be reported to the Hotline as soon as you become aware of it, with the parent notified immediately after the child\'s safety is ensured.',
      cite: '§748.303',
    },
    {
      id: 's6',
      time: '12:30 PM',
      title: 'An emergency admission at lunch',
      situation: 'A police officer brings in a 14-year-old boy who was found alone overnight and cannot go home. Your license includes emergency care services, but you are at capacity with 24 children. The boy is quiet and says he is "allergic to something," but he cannot name it.',
      choices: [
        {
          text: 'Admit him and notify your Licensing representative in writing within 24 hours that you are over capacity. Record the required emergency admission information today and plan to return to capacity within 48 hours.',
          outcome: 'Your documentation includes his allergy concern, circumstances of arrival, and a safety plan for high-risk behaviors. A transfer is arranged on day two.',
          effects: { safety: 2, compliance: 2, morale: -1, budget: -1 },
          best: true,
        },
        {
          text: 'Admit him and let census stay over capacity until the end of the week while the placement is sorted out. Emergency admissions are exempt from capacity limits.',
          outcome: 'On day three, a Licensing visit finds the operation over capacity beyond the allowed 48 hours.',
          effects: { safety: -1, compliance: -3, morale: -1, budget: 1 },
        },
        {
          text: 'Admit him but hold off documenting allergies, health conditions, and behavior risks until the full admission assessment, which can wait 40 days.',
          outcome: 'That evening, a night caregiver serves him a food that causes a reaction because nothing was written down.',
          effects: { safety: -3, compliance: -2, morale: -1, budget: 0 },
        },
      ],
      lesson: 'An emergency care operation may exceed capacity temporarily, for no more than 48 hours, with notice to Licensing within 24 hours of placement. Certain information (circumstances, allergies, chronic conditions, restraint contraindications, high-risk behaviors) must be documented at the time of an emergency admission. The full assessment is due within 40 days.',
      cite: '§748.155',
    },
    {
      id: 's7',
      time: '1:30 PM',
      title: 'Restraint paperwork',
      situation: 'At 10:20 this morning a caregiver used an 11-minute personal restraint on Jaylen, age 12, after a fight. It is Jaylen\'s fourth personal restraint in the last six days. The caregiver who did the restraint starts three days of leave at 5:00 PM today, and the incident report is not started.',
      choices: [
        {
          text: 'Let the paperwork wait until she is back in three days. It can go in with the monthly summary.',
          outcome: 'The caregiver\'s memory fades, the 24-hour documentation deadline passes, and the 72-hour parent notice is late.',
          effects: { safety: -1, compliance: -3, morale: 0, budget: 0 },
        },
        {
          text: 'Have her document it today and notify the parent. Each restraint was justified on its own, so no review is needed.',
          outcome: 'Four personal restraints in seven days triggers a review within 30 days. Skipping it leaves Jaylen\'s underlying needs unaddressed.',
          effects: { safety: -2, compliance: -2, morale: 0, budget: 0 },
        },
        {
          text: 'Have her document it before she leaves, arrange Jaylen\'s private discussion within 48 hours, send written notice to the parent within 72 hours, and schedule the triggered review within 30 days.',
          outcome: 'The supervisor review is documented within 72 hours, Jaylen is heard, and the review team revises his de-escalation strategies. It takes real time to organize.',
          effects: { safety: 2, compliance: 2, morale: -1, budget: -1 },
          best: true,
        },
      ],
      lesson: 'Document an emergency behavior intervention within 24 hours, give the child a private discussion within 48 hours, notify the parent in writing within 72 hours, and have the supervisor review it within 72 hours. Four personal restraints of the same child within seven days triggers a review within 30 days.',
      cite: '§748.2901',
    },
    {
      id: 's8',
      time: '2:30 PM',
      title: 'The administrator seat is empty',
      situation: 'The board president calls: the operation\'s licensed administrator has resigned, effective immediately. You are the program director with authority to act for the permit holder, you do not hold an administrator license, and there is no back-up administrator on your staffing plan.',
      choices: [
        {
          text: 'Name yourself "acting administrator" for a few months and tell Licensing once a permanent hire is lined up.',
          outcome: 'Licensing learns of the vacancy from the Hotline intake and finds the written notice was never sent.',
          effects: { safety: -1, compliance: -3, morale: 0, budget: 0 },
        },
        {
          text: 'Notify your Licensing representative in writing within two days and start recruiting a licensed administrator right away, knowing you have 60 days from the vacancy to fill it.',
          outcome: 'Licensing acknowledges the notice, and the board approves a search firm. The cost stings, but staff see a plan.',
          effects: { safety: 1, compliance: 2, morale: 1, budget: -1 },
          best: true,
        },
        {
          text: 'You have 60 days before the vacancy can be cited, so there is no need to tell anyone until you have a new administrator in place.',
          outcome: 'The 60 days is a grace period for filling the position, not for notice. The late notice is cited.',
          effects: { safety: -1, compliance: -2, morale: 0, budget: 0 },
        },
      ],
      lesson: 'Notify Licensing in writing as soon as possible, and within two days, when the administrator position becomes vacant or changes. With no back-up administrator, you have 60 days from the vacancy to obtain a licensed administrator before you can be cited.',
      cite: '§748.154',
    },
    {
      id: 's9',
      time: '3:45 PM',
      title: 'She never got off the bus',
      situation: 'Keyana, age 15, did not return from school. The school says she left on the bus but she is not in the cottage. Her caseworker reminds you that Keyana was previously identified as a trafficking victim, and her roommate says she has been texting an older man.',
      choices: [
        {
          text: 'Treat it as high risk: report immediately to the Texas Abuse and Neglect Hotline, call law enforcement and her parent or guardian right away, and keep the cottage within ratio while others search.',
          outcome: 'Police start looking within minutes and she is located that evening. Your documentation shows prompt, correct reporting, and you debrief her the next morning.',
          effects: { safety: 2, compliance: 2, morale: 0, budget: -1 },
          best: true,
        },
        {
          text: 'Wait the full six hours before reporting. She is 15 and usually returns on her own.',
          outcome: 'Six hours is for typical absences. Her trafficking history required an immediate report. The delay becomes a serious finding.',
          effects: { safety: -3, compliance: -3, morale: 0, budget: 0 },
        },
        {
          text: 'Send two caregivers to search for her for a few hours first, leaving the cottage short, and call authorities if she is not found by dinner.',
          outcome: 'The remaining children are under-supervised, the search turns up nothing, and the reporting window has already been missed.',
          effects: { safety: -3, compliance: -2, morale: -1, budget: 0 },
        },
      ],
      lesson: 'For an unauthorized absence of a child 13 or older, report no later than six hours after discovery if the child is still missing. Report immediately if the child was previously alleged or determined to be a trafficking victim or you believe the child was abducted or will not return. Debrief the child within 24 hours of return.',
      cite: '§748.303',
    },
    {
      id: 's10',
      time: '4:30 PM',
      title: 'Planning Jordan\'s move',
      situation: 'Jordan, age 16, will move to a relative\'s home in six days in a planned, non-emergency discharge. He takes a daily prescription medication. A caseworker asks what you need to do on your end.',
      choices: [
        {
          text: 'Tell Jordan the morning of the move to avoid anxiety, with no written justification for the short notice.',
          outcome: 'Jordan feels blindsided and has a hard goodbye. The record has no justification for skipping advance notice.',
          effects: { safety: -1, compliance: -2, morale: -2, budget: 0 },
        },
        {
          text: 'Plan the move with the caseworker only, then keep the remaining prescription at the cottage for your supply and mail the discharge summary only if someone asks.',
          outcome: 'Jordan arrives at his relative\'s home with no medication in hand and a gap in his dosing.',
          effects: { safety: -3, compliance: -2, morale: -1, budget: 1 },
        },
        {
          text: 'Plan with a current caregiver and a professional level service provider, invite Jordan and his parent, tell Jordan at least four days ahead, send his current prescription with the person he moves to, and send the discharge summary within 15 days (with consent).',
          outcome: 'The transition meeting goes well, Jordan has time to say goodbye, and the relative has his medication and records.',
          effects: { safety: 2, compliance: 2, morale: 1, budget: -1 },
          best: true,
        },
      ],
      lesson: 'Involve a current caregiver and a professional level service provider in non-emergency discharge planning, invite the child and parents, and inform the child at least four days ahead. Send prescription medication with the person the child goes to, and provide the discharge summary within 15 days of discharge when consent is obtained.',
      cite: '§748.1433',
    },
    {
      id: 's11',
      time: '5:15 PM',
      title: 'A letter about safe sleeping',
      situation: 'Your Licensing representative sends notice of a safe-sleeping deficiency in the teen-parenting program: a swaddled infant was laid down to sleep without a health-care professional\'s order. The operation currently has 24 children, including two infants, in residence.',
      choices: [
        {
          text: 'Phone the infant\'s mother, explain what happened, and post a short notice on the staff bulletin board.',
          outcome: 'Other parents never hear about it, and the next time Licensing checks, there is no written proof of notification.',
          effects: { safety: 0, compliance: -2, morale: 0, budget: 0 },
        },
        {
          text: 'Within five days, send Form 2970 to the parent (or DFPS caseworker) of every child residing at the operation, and keep proof that you did.',
          outcome: 'Some parents ask hard questions, but you have your corrective actions ready. Licensing sees the proof and moves on.',
          effects: { safety: 1, compliance: 2, morale: -1, budget: 0 },
          best: true,
        },
        {
          text: 'Include the information in next month\'s parent newsletter.',
          outcome: 'The newsletter goes out well after the five-day deadline and does not use the required form.',
          effects: { safety: 0, compliance: -2, morale: 0, budget: 1 },
        },
      ],
      lesson: 'When Licensing finds a safe sleeping or abuse/neglect/exploitation deficiency, you must notify the parent of each child residing at the operation within five days, using the required form, and keep proof of that notification.',
      cite: '§748.319',
    },
    {
      id: 's12',
      time: '6:00 PM',
      title: 'Who answers the phone tonight?',
      situation: 'You are leaving for a family event out of town and will be out of cell range until midnight. The night caregivers have always been told to "call the administrator" if there is a problem, and your assistant is also off tonight.',
      choices: [
        {
          text: 'Designate a specific employee to be on call and reachable tonight, give every caregiver that number, and share the on-call system with Licensing.',
          outcome: 'At 10:40 PM a caregiver reaches the on-call employee within two minutes about a child with a fever. You sleep soundly.',
          effects: { safety: 2, compliance: 2, morale: 0, budget: -1 },
          best: true,
        },
        {
          text: 'Leave your cell number on the sticky note and ask the night caregivers to leave a voicemail if you do not answer.',
          outcome: 'A caregiver needs guidance during a medical concern. Your phone has no service, and she waits 40 minutes with no support.',
          effects: { safety: -2, compliance: -2, morale: -1, budget: 0 },
        },
        {
          text: 'Name the night caregiver already supervising the cottage as the on-call person. She is on site anyway.',
          outcome: 'She cannot leave the children to handle emergencies and has nobody to call for support. The system exists only on paper.',
          effects: { safety: -2, compliance: -2, morale: -1, budget: 0 },
        },
      ],
      lesson: 'You must have a system for a person designated to handle emergencies who is on call and accessible to your caregivers. Inform all caregivers, and Licensing, of the system and how to reach the person on call.',
      cite: '§748.537',
    },
  ],
};
