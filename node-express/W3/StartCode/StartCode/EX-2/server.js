// server.js
import express from 'express';
import courses from "./course.js";
const app = express();
const PORT = 3003;

// logs
const logs = (req, res, next) => {
    const method = req.method;
    const path = req.url;
    const queryParams = req.query;
    const timestamp = new Date().toISOString();
    console.log('\n' + '='.repeat(80));
    console.log(`📋 REQUEST LOG:`);
    console.log(`   Timestamp: ${timestamp}`);
    console.log(`   Method: ${method}`);
    console.log(`   Path: ${path}`);
    console.log(`   Query Parameters: ${JSON.stringify(queryParams, null, 2)}`);
    console.log('='.repeat(80));
    
    // Continue to the next middleware or route handler
    next();   
}
// validate query parameters
const validateQueryParams = (req, res, next ) => {
    const {minCredits, maxCredits} = req.params;

    const validateHelper = (value, paramName) => {
        if (value !== undefined) {
            const num = parseInt(value);
            if (isNaN(num)) {
                return res.status(400).json({error: `Invalid ${paramName}: must be a valid integer`})
            }
            return num;
        }
        return null;
    }
    const minVal = validateHelper(minCredits, "minCredits");
    if(res.headersSent) return;
   const maxVal = validateHelper(maxCredits, 'maxCredits');
    if (res.headersSent) return;
    
    // Check range if both exist
    if (minVal !== null && maxVal !== null && minVal > maxVal) {
        return res.status(400).json({
            error: 'Invalid credit range',
            message: 'minCredits cannot be greater than maxCredits'
        });
    }
    
    next();

}


app.use(express.json())
app.use(logs)
// Route: GET /departments/:dept/courses
app.get('/departments/:dept/courses',validateQueryParams, (req, res) => {
    const { dept } = req.params; // :dept : a req parametero
    const { level, minCredits, maxCredits, semester, instructor } = req.query;
    // Implementing the filter logic
    // Hint: Use the filter method to filter the courses array based on the provided criteria

    
    let result = courses.filter(courses => courses.department === dept);
    if (level) result = result.filter(course => course.level === level);
    if (minCredits) result = result.filter(course => course.credits >= parseInt(minCredits));
    if (maxCredits) result = result.filter(course => course.credits <= parseInt(maxCredits));
    if (instructor) result = result.filter(course => course.instructor.toLowerCase().includes(instructor.toLowerCase()));
    if (semester) result = result.filter(course => course.semester === semester);
    res.json(result)
    if (result.length ===0 ) {
        res.send('No matching courses')
        return
    }


});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

