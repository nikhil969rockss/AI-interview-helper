

function promptBuilder({resume, selfDescription, jobDescription}){

    const prompt = `You are a senior technical interviewer.

Candidate Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}

Generate:

- technical interview questions
- behavioral questions
- skill gaps
- preparation plan

according to schema which is provided 

Return JSON only.

`
return prompt
}

module.exports = promptBuilder