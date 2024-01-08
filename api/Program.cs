// Create a new instance of the web application builder
using api.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the dependency injection container
// These services can be injected into controllers, Razor Pages, etc.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDBContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

// Build the web application
var app = builder.Build();

// Configure the middleware pipeline
// Middleware components are executed in the order they are added

// In development environment, enable Swagger and Swagger UI
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Redirect all HTTP requests to HTTPS
app.UseHttpsRedirection();

// Start the web application
app.Run();