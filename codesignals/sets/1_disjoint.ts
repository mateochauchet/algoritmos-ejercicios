function audienceOverlap(blog1, blog2) {
    const blog1VisitorsSet = new Set(blog1);
    return blog2.some(el => blog1VisitorsSet.has(el));
}

// Prueba del código
let blog1 = [1, 2, 3, 4, 5];
let blog2 = [6, 7, 8, 9, 10];

console.log(audienceOverlap(blog1, blog2) 
    ? "Yes, there is an audience overlap between both blogs." 
    : "No, there is no audience overlap between both blogs.");
