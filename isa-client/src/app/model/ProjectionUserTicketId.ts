export class ProjectionUserTicketId
{
    private projectionId : number;
    private userId : number;
    private ticketId : number;

    constructor(
        projectionId : number,
        userId : number,
        ticketId : number
    ) {
 
        this.projectionId = projectionId;
        this.userId = userId;
        this.ticketId = ticketId;

    }

 }