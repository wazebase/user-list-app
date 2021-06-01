export interface IPagination {
    usersPerPage:number,
    totalUsers:number,
    paginate: (number:number)=>void
}