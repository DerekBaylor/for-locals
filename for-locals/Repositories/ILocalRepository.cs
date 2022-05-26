using for_locals.Models;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;

namespace for_locals.Repositories
{
    public interface ILocalRepository
    {
        List<Local> GetAllLocals();
        Local GetLocalById(int UserId);
        Local GetLocalByFirebaseKey(string firebasekey);
        void AddLocal(Local local);
        void UpdateLocal(Local local);
        void DeleteLocal(string firebasekey);
    }
}
