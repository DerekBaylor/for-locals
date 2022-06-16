﻿using for_locals.Models;

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
        public bool LocalExists(string firebasekey);
    }
}
