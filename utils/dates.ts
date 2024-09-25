export const getAgeInYears = () => {
    const birthday = new Date("2004-01-05");
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}