using for_locals.Repositories;
using FirebaseAdmin;
using Google.Apis.Auth.OAuth2;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                       policy =>
                       {
                           policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
                       });
});



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddTransient<ILocalRepository, LocalRepository>();
builder.Services.AddTransient<IBusinessRepository, BusinessRepository>();
builder.Services.AddTransient<IReviewRepository, ReviewRepository>();


// Firebase Authentication
var firebaseProjectId = builder.Configuration.GetValue<string>("FirebaseProjectId");
var googleTokenUrl = $"https://securetoken.google.com/{firebaseProjectId}";
var FirebaseSDKPath = builder.Configuration["FirebaseSDKPath"];

FirebaseApp.Create(new AppOptions()
{
    Credential = GoogleCredential.FromFile(FirebaseSDKPath)
});

builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
    {
        options.Authority = googleTokenUrl;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = googleTokenUrl,
            ValidateAudience = true,
            ValidAudience = firebaseProjectId,
            ValidateLifetime = true
        };
    });

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(builder => { builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin(); });

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();

//app.UseCors(MyAllowSpecificOrigins);
