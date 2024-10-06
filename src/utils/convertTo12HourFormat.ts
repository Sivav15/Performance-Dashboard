function convertTo12HourFormat(timeString: string): string {
    const [hours] = timeString.split(':');
    
    
    let hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12;

    return `${hour} ${ampm}`;
}

export default convertTo12HourFormat
 