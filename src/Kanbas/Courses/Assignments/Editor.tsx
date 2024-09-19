export default function AssignmentEditor() {
    return(
        <div id="wd-assignment-editor">
            <label htmlFor="wd-name"><h3>Assignment Name</h3></label> <br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description"> 
            "This assignment is available online Submit a link to the landing 
            page of your Web application running on Netlify. The landing page should include the following: Your
            full name and section. Links to each of the lab assignments Link to the Kanbas application. Links to 
            all relevant source code repositories. The Kanbas application should include a link to navigate back 
            to the landing page. "
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr><br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                    <select id="wd-group">
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    </select>
                    </td>
                </tr><br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade As</label>
                    </td>
                    <td>
                    <select id="wd-display-grade-as">
                        <option value="Percentage">Percentage</option>
                        <option value="Grade Point">Grade Point Average</option>
                    </select>
                    </td>
                </tr><br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                    <select id="wd-submission-type">
                        <option value="Online">Online</option>
                    </select><br/><br/>
                    <label htmlFor="wd-text-entry">Online Entry Options</label><br/>
                    <td>
                        <input type="checkbox" name="check-text" id="wd-chkbox-text"/>
                        <label htmlFor="wd-chkbox-text">Text Entry</label><br/>

                        <input type="checkbox" name="check-url" id="wd-website-url"/>
                        <label htmlFor="wd-website-url">Website URL</label><br/>

                        <input type="checkbox" name="check-recording" id="wd-media-recordings"/>
                        <label htmlFor="wd-media-recordings">Media Recording</label><br/>

                        <input type="checkbox" name="check-annotation" id="wd-student-annotation"/>
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                        <input type="checkbox" name="check-file" id="wd-file-upload"/>
                        <label htmlFor="wd-file-upload">File Upload</label><br/>
                    </td>
                    </td>
                </tr><br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                 
                    <label htmlFor="wd-wd-assign-to"> Assign to</label><br />
                    <input id="wd-assign-to" value="Everyone" /><br /><br />
                
                    <label htmlFor="wd-due-date"> Due</label><br />
                    <input id="wd-due-date" value="Everyone" /><br /><br />
                    
                    <label htmlFor="wd-available-from"> Available From </label>
                    <input type="date"
                        id="wd-available-fromd"
                        value="2000-01-21"/>

                    <label htmlFor="wd-available-until"> Available Until </label>
                    <input type="date"
                        id="wd-available-until"
                        value="2000-01-21"/>
                    
                    
                    
                    </tr><br />
            </table>
            <hr />
            <tr>
                <button id="wd-cancel">Cancel</button>
                <button id="wd-save">Save</button>
            </tr><br />
        </div>
    )
}